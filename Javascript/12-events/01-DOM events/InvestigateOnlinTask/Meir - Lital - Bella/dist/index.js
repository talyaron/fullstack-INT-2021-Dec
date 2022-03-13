var aBox = document.querySelector("#aBox");
// document.onload = handleClick;
var body = document.querySelector("body");
document.onscroll = handleClick;
var counter = 0;
function handleClick(ev) {
    console.log(counter);
    counter++;
    ev.stopPropagation();
    var element = ev.target;
    element.style.backgroundColor = getRandomColor();
    // body.innerHTML += `${ev.x}, ${ev.y}`;
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
