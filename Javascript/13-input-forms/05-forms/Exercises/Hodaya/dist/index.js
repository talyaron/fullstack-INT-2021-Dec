function handleLogin(event) {
    event.preventDefault();
    console.log(event.value);
    var elements = event.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "password") {
            result[elements[i].name] = elements[i].value;
        }
        else if (elements[i].type === "text") {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
}
