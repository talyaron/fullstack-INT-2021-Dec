var balloons = document.querySelectorAll(".balloon");
function moveBalloons() {
    balloons.forEach(function (element) {
        element.style.top = "-25vh";
        element.style.left = getRandom() + "vw";
    });
}
function getRandom() {
    var random = Math.floor(Math.random() * 90);
    return random;
}
moveBalloons();
