// ----------------------vars-=---------------------
let loginForm = document.querySelector("#loginForm");
let emailInput = document.querySelector("#emailInput");
let passInput = document.querySelector("#passInput");
let wrongEmail = document.querySelector("#wrongEmail");
// ===================================================
let users = [];

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"))
}

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    login()
})

function login() {
    let userData = {
        email: emailInput.value,
        password: passInput.value,
    }
    console.log(userData);

    if (isLoginValid(userData) == true) {
        console.log("u r logged in");
        wrongEmail.classList.replace("d-block" , "d-none")
        setTimeout(function(){
            window.location.href = `../index.html`    
        } , 1000);
    } else {
        console.log("user is not found");
        wrongEmail.classList.replace("d-none" , "d-block")
    }
}

function isLoginValid(userData) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == userData.email.toLowerCase() &&
            users[i].password.toLowerCase() == userData.password.toLowerCase()) {
            console.log("user found");
            localStorage.setItem("userName" , users[i].name)
            return true;
        }
    }
}