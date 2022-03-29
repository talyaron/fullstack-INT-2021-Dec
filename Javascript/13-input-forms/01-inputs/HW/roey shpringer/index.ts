
const userName = document.querySelector(".username")

const usernamediv = document.querySelector(".yourusername")

const body = document.querySelector("body")

const wrapper = document.querySelector(".wrapper")

const url = document.querySelector(".url")

function handleUserName(ev) {
    let input = ev.target.value;
    usernamediv.innerHTML = `Your username: ${input}`
    if (input.charAt(0) !== input.charAt(0).toUpperCase()) {
        usernamediv.innerHTML = `please make sure the first letter in your username is in caps! `
        usernamediv.className = 'nocaps'
    }
}

let newUrlDiv = document.createElement("img")
newUrlDiv.className = 'profileImg'
let errorDiv = document.createElement("p")
errorDiv.style.textDecoration = "underline"

function handleUrl(ev) {
    let urlCharSet = /https:/
    let inputUrl = ev.target.value
    let testIfUrl = urlCharSet.test(inputUrl)
    if (testIfUrl == false) {
        wrapper.append(errorDiv)
        errorDiv.innerHTML = 'please enter a valid url'
    } else {
        wrapper.append(newUrlDiv)
        newUrlDiv.src = inputUrl
    }
}

function handleDeleteOne(ev){
    if(ev.isTrusted == true){
        userName.value = ''
    }
}

function handleDeleteTwo(ev){
    if(ev.isTrusted == true){
        url.value = ''
    }
}

