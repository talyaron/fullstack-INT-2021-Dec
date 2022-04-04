console.log("Connected!");
function handleSubmit(ev) {
    ev.preventDefault();
    var elements = ev.target.elements;
    var userdata = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            userdata[elements[i].name] = elements[i].value;
        }
    }
    console.log(userdata);
}
