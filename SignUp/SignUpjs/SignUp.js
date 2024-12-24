//     VARS
let registerForm = document.querySelector("#registerForm");
let userName = document.querySelector("#userName");
let userEmail = document.querySelector("#userEmail");
let userPass = document.querySelector("#userPass");
let nameAlert = document.querySelector("#nameAlert")
let emailAlert = document.querySelector("#emailAlert");
let passAlert = document.querySelector("#passAlert");
let inputsAlert = document.querySelector("#inputsAlert");
let existAlert = document.querySelector("#existAlert")
let successAlert = document.querySelector("#successAlert")
//------------------------------------------------------------------------------

let users = [];

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkIfAllInputsAreValid()) {
        console.log("user is added");
        addUser()
    }
    
})

function addUser() {
    let newUser = {
        name: userName.value,
        email: userEmail.value,
        password: userPass.value
    };
    if (isExist(newUser) == true) {
        console.log("email is already exist");
        existAlert.classList.replace("d-none" , "d-block")
        successAlert.classList.replace("d-block" , "d-none")
    } else {
        console.log(newUser);
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        console.log(users); 
        console.log("user is new");
        existAlert.classList.replace("d-block" , "d-none");
        successAlert.classList.replace("d-none" , "d-block");
        setTimeout(function(){
            window.location.href = `../SignIn/index.html`
        },1000);
    }
}

function isExist(newUser) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() == newUser.email.toLowerCase()) {
            console.log("email is already exist");
            return true
        }
    }
}

function allvalidInputs(regex, element, alertMsg) {
    let validation = regex;

    if (validation.test(element.value) == true) {
        console.log("Valid");
        alertMsg.classList.replace("d-block", "d-none")
        return true
    } else {
        console.log("not valid");
        alertMsg.classList.replace("d-none", "d-block")
        return false
    }
}

function checkIfAllInputsAreValid() {
    if (
        allvalidInputs(/^[A-Za-z0-9 ]{2,30}$/, userName, nameAlert) &&
        allvalidInputs(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[.com]$/, userEmail, emailAlert) &&
        allvalidInputs(/^[A-Za-z0-9!@#$%&*()]{8,}$/, userPass, passAlert)) {
        console.log("all inputs are valid");
        inputsAlert.classList.replace("d-block" , "d-none")
        return true
    } else {
        console.log("something went wrong");
        inputsAlert.classList.replace("d-none" , "d-block")
        return false
    }
}

if (localStorage.getItem("users") !== null) {
    users = JSON.parse(localStorage.getItem("users"))
}