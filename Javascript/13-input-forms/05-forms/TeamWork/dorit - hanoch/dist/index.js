var root = document.querySelector("#root");
var login = document.querySelector("#login");
var signUpPassword = "";
var result = {};
function handleSend(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    var value = result['img'];
    root.innerHTML = "<img src=\"" + value + "\" width=\"100px\" height=\"100px\">";
    if (result['pass'] === result['repass']) {
        signUpPassword = result['pass'];
        alert('ok,  now please enter signin Form');
        handleLoginForm();
    }
}
function handleLoginForm() {
    var html = " <div id=\"login\"><form onsubmit=\"handleSendSignIn(event)\">\n        <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\">\n        <input type=\"password\" name=\"pass\" placeholder=\"password\">\n        <button type=\"submit\">SEND</button>\n        </form></div>";
    console.log(html);
    root.innerHTML += html;
}
function handleSendSignIn(ev) {
    ev.preventDefault();
    var resultNew = {};
    var elementsNew = ev.target.elements;
    //console.log(elementsNew)
    for (var i = 0; i < elementsNew.length; i++) {
        if (elementsNew[i].name && elementsNew[i].value) {
            resultNew[elementsNew[i].name] = elementsNew[i].value;
        }
    }
    //console.log(elementsNew)
    if (resultNew['pass'] === signUpPassword) {
        alert('Hi, you were authorised');
    }
}
