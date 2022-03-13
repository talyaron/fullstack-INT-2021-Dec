var aBox = document.querySelector("#aBox");
document.onload = handleClick;
aBox.onclick = handleClick;
function handleClick(ev) {
    console.log(ev);
    ev.stopPropagation();
    var element = ev.target;
    element.style.backgroundColor = getRandomColor();
    element.innerHTML += "<div>(" + ev.x + ", " + ev.y + ")</div>";
}
console.dir(aBox);
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
