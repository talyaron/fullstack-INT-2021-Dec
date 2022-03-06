var boxs = document.querySelectorAll('.box');
console.dir(boxs);
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(function (element) {
    element.style.backgroundColor = getRandomColor();
    element.style.left = listRandomboxs() + "px";
    element.style.width = listRandomboxs() / 10 + "px";
    element.style.height = listRandomboxs() / 10 + "px";
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
function listRandomboxs() {
    var getRandomPostion;
    getRandomPostion = Math.random() * 500;
    return getRandomPostion;
}
window.setTimeout(function () {
    window.location.reload();
}, 1000);
//create random postions on the screen
//create random sizes
//* change it every 1 second (and use transfer )css
