var balloons = document.querySelectorAll('.balloon');
console.dir(balloons);
moveBalloons(balloons);
function moveBalloons(balloons) {
    balloons.forEach(function (balloon) {
        moveBalloon(balloon);
    });
}
//create balloon
function createBalloon() {
    setInterval(function () {
        var body = document.querySelector("body");
        var leftb = Math.round(Math.random() * 90) + "vw";
        var balloonCss = body.innerHTML += "<div balloon id=\"balloon\" top=\"112vh\" left = " + leftb + "  <img src = \"img/balloon-blue.png\"></div>";
        var balloon = document.querySelector("#balloon");
        moveBalloon(balloon);
    }, Math.round(Math.random() * 30));
}
// -> move balloon
// in random times....
function moveBalloon(balloon) {
    balloon.style.top = '112vh';
    balloon.style.left = Math.random() * 90 + "vw";
    setInterval(function () {
        balloon.style.top = '-12vh';
    }, 500);
}
