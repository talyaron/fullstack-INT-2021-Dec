var balloons = document.querySelectorAll('.baloons');
function moveBalloons() {
    balloons.forEach(function (elm) {
        elm.style.top = "15vh";
        elm.style.left = getRandomNumber() + "vw";
    });
}
function moveBalloons1() {
    balloons.forEach(function (elm) {
        elm.style.top = "90vh";
        // elm.style.left = `${getRandomNumber()}vw`
    });
}
// setInterval(moveBalloons(),500)
function getRandomNumber() {
    var random = Math.floor(Math.random() * 90);
    return random;
}
function moveBalloons2() {
    moveBalloons();
    moveBalloons1();
}
setInterval(moveBalloons, 5000);
setInterval(moveBalloons1, 5000);
