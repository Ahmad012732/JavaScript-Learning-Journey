document.addEventListener("DOMContentLoaded", () => {
    let email = "Ahmadmuhammad@gmail.com"
let password = 1234
const emailInput = document.getElementById("input-email");
const passwordInput = document.getElementById("input-password")
const loginButton = document.getElementById("login-btn")
const checkBox = document.getElementById("checkbox")

loginButton.addEventListener('click', () => {
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()
    if(email && password === "" )return;
    
        const div = document.querySelector(".hidden")
        const showMessage = document.querySelector(".p-hidden")
        showMessage.textContent = "Successiful"
        div.classList.add("hidden")
        showMessage.classList.add("p-hidden")
        div.appendChild(showMessage)
})
})