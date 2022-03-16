// const wrapper: HTMLDivElement = document.querySelector('.wrapper');
var box = document.querySelectorAll('.box');
box.onmouseover = disappear;
// box.onclick = disappear;
document.onload = greating;
// box.ondblclick = appear;
function paintBox(ev) {
    box.style.backgroundColor = randomColor();
}
function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function disappear(ev) {
    box.style.display = 'none';
}
function greating(ev) {
    alert("Hey");
}
// function appear(ev) {
//     box.style.display = 'block';
// }
