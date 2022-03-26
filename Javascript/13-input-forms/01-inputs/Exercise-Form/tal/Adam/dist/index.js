var root = document.querySelector("#root");
function handleName(event) {
    var name = document.createElement("div");
    name.id = "name";
    name.innerHTML += "<div id=\"Text\"><p>name: " + event.target.value + "</p></div>";
    root.appendChild(name);
}
