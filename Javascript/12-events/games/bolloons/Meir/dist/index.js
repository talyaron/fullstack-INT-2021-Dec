// const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll("#ballon");
// console.dir(ballons);
///////// Function create ballon
function createBalloon() {
    var balloonId = uid();
    document.body.innerHTML += "<img id=" + balloonId + " class=\"ballon\" src=\"ballon.svg.png\"/>";
    var ballon = document.querySelector("#" + balloonId);
    balloonId.onclick = bombPicture;
    moveBalloon(balloon);
}
//////// Function move baloon
function moveBalloon(balloon) {
    balloon.style.top = '90vh';
    balloon.style.left = Math.random() * 90 + "vw";
    balloon.onclick = bombPicture;
    setTimeout(function () {
        balloon.style.top = '-16vh';
    }, 700);
}
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
