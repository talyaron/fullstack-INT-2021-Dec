function handle(ev) {
    var elements = ev.target.elements;
    ev.preventDefault();
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
}
