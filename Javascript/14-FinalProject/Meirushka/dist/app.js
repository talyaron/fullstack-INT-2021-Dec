// selectors
var root = document.querySelector('.root');
// const note = document.querySelector('.note')
// Functions
function handleNote(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "text") {
            result[elements[i].name] = elements[i].value;
        }
        else if (elements[i].name && elements[i].value) {
            result[elements[i].name] = elements[i].value;
        }
    }
    console.log(result);
    root.innerHTML += "<div>" + result.note + "</div>";
}
