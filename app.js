const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

function onLoginButtonClick(event) {
    event.preventDefault()
    console.log(event)
}

loginForm.addEventListener("submit", onLoginButtonClick)