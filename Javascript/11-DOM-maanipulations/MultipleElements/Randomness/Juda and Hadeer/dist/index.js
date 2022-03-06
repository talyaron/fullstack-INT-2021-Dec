var boxs = document.querySelectorAll('.box');
console.dir(boxs);
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(function (element) {
    element.style.backgroundColor = getRandomColor();
    element.style.width = getRandomNumber();
    element.style.height = getRandomNumber();
    element.style.left = getRandomPosition();
    element.style.top = getRandomPosition();
    element.style.right = getRandomPosition();
});
//create random postions on the screen
//create random sizes
//* change it every 1 second (and use transfer )css
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
function getRandomNumber() {
    var boxsize = (((Math.random() * 100) + 60).toFixed()) + 'px';
    return boxsize;
}
function getRandomPosition() {
    var boxsize = (((Math.random() * 800) + 60).toFixed()) + 'px';
    return boxsize;
}
