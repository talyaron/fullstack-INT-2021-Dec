var result = {};
function handleSend(ev) {
    console.log(ev);
    ev.preventDefault();
    var elements = ev.target.elements;
    // console.log(elements)
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
