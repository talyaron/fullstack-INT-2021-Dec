var boxs = document.querySelectorAll('.box');
console.dir(boxs);
boxs[0].style.postions = 'yellow';
boxs.forEach(function (element) {
    element.style.backgroundColor = getRandomColor();
    element.style.top = getRandomPostion() + "px";
    element.style.left = getRandomPostion() + "px";
    element.style.width = getRandomPostion() / 5 + "px";
    element.style.height = getRandomPostion() / 5 + "px";
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
function getRandomPostion() {
    var postion;
    postion = Math.random() * 800;
    return postion;
}
// refresh the page every 2 sec automatic
window.setTimeout(function () {
    window.location.reload();
}, 2000);
