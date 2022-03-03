const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

function onLoginButtonClick(event) {
    event.preventDefault()
    const username = loginInput.value
    localStorage.setItem("username", username)
    loginForm.classList.add("hidden")
    greeting.innerText = `Hello, ${username}`
    greeting.classList.remove("hidden")
}

loginForm.addEventListener("submit", onLoginButtonClick)