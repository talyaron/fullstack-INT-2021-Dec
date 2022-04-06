var root = document.querySelector('.root');
function handleNote(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "text") {
            result[elements[i].name] = elements[i].note;
        }
        else if (elements[i].name && elements[i].valueAsString) {
            result[elements[i].name] = elements[i].valueAsString;
        }
        console.log(elements[i].name, elements[i].value);
    }
    console.log(result);
    console.log(elements);
}
form.noteText.value === '';
form.addButton.addEventListener(function (elm) {
    elm.preventDefault();
    if (form.noteText.value !== '') {
        addNote();
    }
});
