function handleExe(ev) {
    ev.preventDefault();
    var username = ev.target.elements.username.value;
    var password = ev.target.elements.password.value;
    var elements = ev.target.elements;
    var consol = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "username") {
            consol[elements[i].name] = elements[i].value;
        }
        else if (elements[i].name && elements[i].value) {
            consol[elements[i].name] = elements[i].value;
        }
    }
    console.log(consol);
}
