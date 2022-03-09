var boxs = document.querySelectorAll('.box');
console.dir(boxs);
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(function (element) {
    element.style.backgroundColor = getRandomColor(),
    ;
    //element.style.offsetHeight = getRandomPosition(element),
    //element.style.offsetWidth = getRandomPosition(element)
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
function getRandomPosition(element) {
    var x = document.body.offsetHeight - element.clientHeight;
    var y = document.body.offsetWidth - element.clientWidth;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}
console.dir(boxs);
