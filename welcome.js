let welcomeName =document.querySelector("#welcomeName");





window.addEventListener('load' , function(){
    welcomeMsg()
})

function welcomeMsg() {
    welcomeName.innerHTML = `welcome ${localStorage.getItem("userName")}`
}