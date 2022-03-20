var balloons = document.querySelectorAll(".balloon");
function amazingBallons() {
    balloons.forEach(function (element) {
        element.style.top = -30 + "vh";
        element.style.left = getRandomPosition() + "vw";
    });
}
function getRandomPosition() {
    var randonsize = Math.floor(Math.random() * 100);
    return randonsize;
}
amazingBallons();
