function handleForm(ev) {
    ev.preventDefault();
    console.log(ev.target.elements);
    var elements = ev.target.elements;
    var info = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements.type !== 'button') {
            info[elements[i].name] = elements[i].value;
        }
    }
    console.log(info);
}
