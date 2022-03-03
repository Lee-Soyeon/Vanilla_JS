const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

let toDos = []

function saveToDo() {
    localStorage.setItem("toDos", JSON.stringify(toDos))
}

function deleteToDo(event) {
    const li = event.target.parentElement
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    li.remove()
    saveToDo()
}

function paintToDo(newToDo) {
    const li = document.createElement("li")
    li.id = newToDo.id
    const span = document.createElement("span")
    span.innerText = newToDo.text
    const button = document.createElement("button")
    button.addEventListener("click", deleteToDo)
    button.innerText = "X"
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault()
    const newToDo = toDoInput.value
    toDoInput.value = ""

    const newToDoObj = {
        id: Date.now(),
        text:newToDo
    }

    toDos.push(newToDoObj)
    paintToDo(newToDoObj)
    saveToDo()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem("toDos")

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}