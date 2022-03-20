var balloons = document.querySelectorAll('.balloon');
function goingUp(balloons) {
    balloons.forEach(function (element) {
        element.style.left = getRandomNumber() + "vw";
        element.style.top = '-12vh';
    });
}
function getRandomNumber() {
    var random = Math.floor(Math.random() * 90);
    return random;
}
goingUp(balloons);
