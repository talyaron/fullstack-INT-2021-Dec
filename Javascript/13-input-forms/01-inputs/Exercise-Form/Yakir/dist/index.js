function handelInsertText(event) {
    console.dir(event);
    var outputElement = document.querySelector("#" + event.target.name);
    try {
        var value = event.target.value;
        outputElement.innerHTML = value;
    }
    catch (err) {
        console.error(err);
    }
}
