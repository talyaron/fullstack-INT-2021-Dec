var name1 = document.querySelector("#name");
var mail = document.querySelector("#mail");
var pass = document.querySelector("#pass");
function handleGetText(event) {
    console.dir(event);
    var outputText = document.querySelector("#" + event.target.name);
    var value = event.target.value;
    outputText.innerHTML = value;
}
