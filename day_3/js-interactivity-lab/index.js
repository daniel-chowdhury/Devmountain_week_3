console.log("hello world")

let message = document.querySelector("#message")

function addMovie(pagolchagolevent) {
    pagolchagolevent.preventDefault()
    let inputField = document.querySelector("input")
    let movie = document.createElement("li")
    let movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    let string_check = movieTitle.textContent
    string_check = string_check.trim()
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie)
    if (string_check !== "") {
    document.querySelector("ul").appendChild(movie)
    }
    movie.appendChild(deleteBtn)
}

let ranvar = document.querySelector("form")
ranvar.addEventListener("submit", addMovie)

function deleteMovie(pagolchagolevent) {
    message.textContent = `${pagolchagolevent.target.parentNode.childNodes[0].textContent} has been deleted!`
    pagolchagolevent.target.parentNode.remove()
    revealMessage()
}

function crossOffMovie(pagolchagolevent) {
    pagolchagolevent.target.classList.toggle("checked")
    if (pagolchagolevent.target.classList.contains("checked")) {
        message.textContent = `${pagolchagolevent.target.textContent} has been watched!`
    } else {
        message.textContent = `${pagolchagolevent.target.textContent} has been added back!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove("hide")
    setTimeout(() => message.classList.add("hide"), 2000)
}