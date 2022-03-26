var ballons = document.querySelectorAll("#ballon");
console.dir(ballons);
///////// Function create ballon
function createBalloon() {
    var balloonId = uid();
    document.body.innerHTML += "<img id='" + balloonId + "' class=\"balloon\" src=\"balloons.png\"/>";
    var balloon = document.querySelector("#" + balloonId);
    moveBalloon(balloon);
}
//////// Function move baloon ramdomly
function moveBalloon(balloon) {
    balloon.style.top = '110vh';
    balloon.style.left = Math.random() * 90 + "vw";
    setTimeout(function () {
        balloon.style.top = '-15vh';
    }, 100);
}
setInterval(createBalloon, 4000);
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
ballons.forEach(function (box) {
    box.onclick = exploteBalloon;
    function exploteBalloon() {
        document.getElementById("image").src = "bombPicture.png";
        var audio = new Audio("poomballon.wav");
        audio.play();
    }
});
