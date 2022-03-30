function handleSend(ev) {
    ev.preventDefault();
    console.log(ev);
    var elements = ev.target.elements;
    var result = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type === "checkbox") {
            result[elements[i].name] = elements[i].checked;
        }
        else if (elements[i].name && elements[i].valueAsNumber) {
            result[elements[i].name] = elements[i].valueAsNumber;
        }
    }
    console.log(result);
    console.log(elements[0].valueAsNumber / elements[1].valueAsNumber);
}
