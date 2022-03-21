var balloons = document.querySelectorAll('.baloons');
function moveBalloons() {
    balloons.forEach(function (elm) {
        elm.style.top = "-15vh";
        elm.style.left = getRandomNumber() + "vw";
    });
}
// setInterval(moveBalloons(),500)
function getRandomNumber() {
    var random = Math.floor(Math.random() * 90);
    return random;
}
setTimeout(moveBalloons);
