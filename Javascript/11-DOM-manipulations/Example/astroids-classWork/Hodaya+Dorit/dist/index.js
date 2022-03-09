var astroids = document.querySelectorAll(".box");
astroids.forEach(function (element) {
    element.style.top = getRandomPostion() + "vh";
    element.style.left = getRandomPostion() + "vw";
});
//create random postions on the screen
//create random sizes
//* change it every 1 second (and use transfer )css
function getRandomPostion() {
    var postion;
    postion = Math.random() * 90;
    return postion;
}
setInterval(function () {
    astroids.forEach(function (element) {
        element.style.top = getRandomPostion() + "vh";
        element.style.left = getRandomPostion() + "vw";
        astroids.forEach(function (element) {
        });
    });
}, 1000);
astroids.forEach(function (element) {
    element.top = Math.round(Math.random() * 900);
    element.left = Math.round(Math.random() * 900);
});
