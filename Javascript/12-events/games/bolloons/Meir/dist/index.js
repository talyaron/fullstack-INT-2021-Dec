var ballons = document.querySelectorAll("#ballon");
console.dir(ballons);
///////// Function create ballon
function createBalloon() {
    var balloonId = uid();
    document.body.innerHTML += "<img id=" + balloonId + " 'class=\"ballon\" src=\"ballon.svg.png\"'/>";
    var balloon = document.querySelector("#" + balloonId);
    moveBalloon(balloon);
}
//////// Function move baloon
function moveBalloon(balloon) {
    balloon.style.top = '115vh';
    balloon.style.left = Math.random() * 90 + "vw";
    setTimeout(function () {
        balloon.style.top = '-15vh';
    }, 100);
}
setInterval(createBalloon, 4000);
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
