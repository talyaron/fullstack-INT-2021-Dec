var boxes = document.querySelectorAll('.box');
function getRandomEverything() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = getRandomColor();
        boxes[i].style.top = getRandomTop();
        boxes[i].style.left = getRandomLeft();
    }
}
setInterval(getRandomEverything, 1000);
console.dir(boxes);
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomTop() {
    var top = Math.round(Math.random() * screen.height) + "px";
    return top;
}
console.log(getRandomLeft());
console.log(getRandomTop());
function getRandomLeft() {
    var left = Math.round(Math.random() * screen.width) + "px";
    return left;
}
