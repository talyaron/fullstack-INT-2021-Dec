var boxes = document.querySelectorAll('.box');
console.dir(boxes);
function animation() {
    boxes.forEach(function (element) {
        element.style.backgroundColor = getRandomColor();
        element.style.top = getRandomSize();
        element.style.left = getRandomSize();
        element.style.width = getRandomSize();
        element.style.height = getRandomSize();
    });
}
setInterval(animation, 2000);
//create random postions on the screen
//create random sizes
//* change it every 1 second (and use transfer )css
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomSize() {
    var randonsize = Math.floor(Math.random() * 1000);
    return randonsize + "px";
}
