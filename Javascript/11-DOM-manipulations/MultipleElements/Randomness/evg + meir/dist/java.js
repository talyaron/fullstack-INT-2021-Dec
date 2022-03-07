var boxs = document.querySelectorAll('.box');
console.dir(boxs);
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(function (element) {
    element.style.backgroundColor = getRandomColor();
    element.style.top = randomNumber();
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
    return color;
}
var divsize = ((Math.random() * 100) + 50).toFixed();
var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
function randomNumber() {
    Math.floor(((Math.random() * 100)));
}
