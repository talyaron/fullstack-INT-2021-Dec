var root = document.querySelector("#root");
var result = {};
function handleSend(ev) {
    console.log(ev);
    ev.preventDefault();
    var elements = ev.target.elements;
    //console.log(elements)()
    console.log('first for');
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    var img = document.querySelector("#root");
    var value = result['img'];
    img.innerHTML = "<img src=\"" + value + "\" width=\"100px\" height=\"100px\">";
    if (result['pass'] == result['repass']) {
        alert('ok');
    }
    var login = document.querySelector(".login");
    login.innerHTML = "please login";
    login.innerHTML = "<form onsubmit=\"handleCheck(event)\"> <input type=\"text\" name=\"loginName\" placeholder=\"name\"> <input type=\"password\" name=\"loginPass\" placeholder=\"password\"></form>";
}
function handleLoginForm() {
    var html = "<form onsubmit=\"handleSendSignIn(event)\">\n        <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"name\">\n        <input type=\"password\" name=\"pass\" placeholder=\"password\">\n        <button type=\"submit\">SEND</button>\n        </form>";
    console.log(html);
    root.innerHTML += html;
}
function handleSendSignIn(ev) {
    ev.preventDefault();
    var resultNew = {};
    var elementsNew = ev.target.elements;
    console.log(elementsNew);
    for (var i = 0; i < elementsNew.length; i++) {
        if (elementsNew[i].name && elementsNew[i].value) {
            resultNew[elementsNew[i].name] = elementsNew[i].value;
        }
    }
    console.log(elementsNew);
    if (resultNew['pass'] === signUpPassword) {
        alert('Hi, you were authorised');
    }
}
