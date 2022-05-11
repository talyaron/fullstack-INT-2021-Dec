var balloons = document.querySelectorAll('.balloon');
console.dir(balloons);
moveBalloons(balloons);
function moveBalloons(balloons) {
    balloons.forEach(function (balloon) {
        moveBalloon(balloon);
    });
}
//create balloon
// -> move balloon
// in random times....
function moveBalloon(balloon) {
    balloon.style.top = '112vh';
    balloon.style.left = Math.random() * 90 + "vw";
    setInterval(function () {
        balloon.style.top = '-12vh';
    }, 500);
}
