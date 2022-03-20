var balloons = document.querySelectorAll(".balloon");
console.dir(balloons);
moveBallons(balloons);
function moveBallons() {
    balloons.forEach(function (balloon) {
        moveBallons(balloon);
    });
}
