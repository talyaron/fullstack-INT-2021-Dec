function handleSubmit(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
}
