var balloons = document.querySelectorAll('.balloon');
balloonsGoUp(balloons);
function balloonsGoUp(balloons) {
    balloons.forEach(function (balloon) {
        balloonUp(balloon);
    });
}
function balloonUp(balloon) {
    balloon.style.top = '112vh';
    balloon.style.left = Math.random() * 90 + "vw";
    setInterval(function () {
        balloon.style.top = '0vh';
    }, 1000);
}
