var root = document.querySelector("#root");
root.innerHTML = '<div id="name"><p></p></div><div id="email"><p></p></div><div id="password"><p></p></div>';
function handleName(event) {
    var name = document.querySelector("#name");
    name.innerText = "Name: " + event.target.value;
}
function handleEmail(event) {
    var email = document.querySelector("#email");
    email.innerText = "E-mail: " + event.target.value;
}
function handlePassword(event) {
}
