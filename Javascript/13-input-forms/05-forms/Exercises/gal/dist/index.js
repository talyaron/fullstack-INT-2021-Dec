function handleExe(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    var consol = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name === "username") {
            consol[elements[i].name] = elements[i].value;
        }
        else if (elements[i].name && elements[i].value) {
            consol[elements[i].name] = elements[i].value;
        }
    }
    console.log(consol);
}
