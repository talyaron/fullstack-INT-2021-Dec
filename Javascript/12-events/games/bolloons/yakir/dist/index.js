var baloons = document.querySelectorAll(".baloon");
function randomPosition() {
    var postion;
    postion = Math.random() * 90;
    return postion;
}
baloonRandom();
window.requestAnimationFrame(baloonRandom);
var intervalID = setInterval(baloonRandom, 5000);
function baloonRandom() {
    baloons.forEach(function (element) {
        //random position
        element.style.top = randomPosition() + "vh";
        element.style.left = randomPosition() + "vw";
    });
}
