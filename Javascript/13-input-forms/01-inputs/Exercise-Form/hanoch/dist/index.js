var name1 = document.querySelector("#name");
var mail = document.querySelector("#mail");
var pass = document.querySelector("#pass");
function handleGetName(event) {
    console.dir(event);
    body.innerHTML = event.target.value;
}
