var userName = document.querySelector(".username");
var usernamediv = document.querySelector(".yourusername");
var body = document.querySelector("body");
var wrapper = document.querySelector(".wrapper");
var url = document.querySelector(".url");
function handleUserName(ev) {
    var input = ev.target.value;
    usernamediv.innerHTML = "Your username: " + input;
    if (input.charAt(0) !== input.charAt(0).toUpperCase()) {
        usernamediv.innerHTML = "please make sure the first letter in your username is in caps! ";
        usernamediv.className = 'nocaps';
    }
}
var newUrlDiv = document.createElement("img");
newUrlDiv.className = 'profileImg';
var errorDiv = document.createElement("p");
errorDiv.style.textDecoration = "underline";
function handleUrl(ev) {
    var urlCharSet = /https:/;
    var inputUrl = ev.target.value;
    var testIfUrl = urlCharSet.test(inputUrl);
    if (testIfUrl == false) {
        wrapper.append(errorDiv);
        errorDiv.innerHTML = 'please enter a valid url';
    }
    else {
        wrapper.append(newUrlDiv);
        newUrlDiv.src = inputUrl;
    }
}
function handleDeleteOne(ev) {
    if (ev.isTrusted == true) {
        userName.value = '';
    }
}
function handleDeleteTwo(ev) {
    if (ev.isTrusted == true) {
        url.value = '';
    }
}
