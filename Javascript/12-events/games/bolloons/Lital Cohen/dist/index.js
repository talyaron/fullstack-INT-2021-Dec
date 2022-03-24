var balloons = document.querySelectorAll(".balloon");
console.dir(balloons);
// function to move all of the balloons up//
moveBalloonsUp(balloons);
function moveBalloonsUp(balloons) {
    balloons.forEach(function (balloon) {
        moveOneBalloonUp(balloon);
        balloon.addEventListener("click", balloonExplodes);
        var aBalloon = document.querySelector("balloonId");
    });
}
//function to create a new balloon//
function createNewBalloon() {
    var balloonId = uid();
    document.body.innerHTML += "<img id='" + balloonId + "' class='balloon' src=\"./dist/Tux_Paint_balloon (1).svg\"/>";
    var balloon = document.querySelector("#" + balloonId);
    console.log("it is a new balloon " + balloonId);
    moveOneBalloonUp(balloon);
}
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
//function to move each one of the balloons up in a radom position every 5s//
function moveOneBalloonUp(balloon) {
    balloon.style.top = "112vh";
    balloon.style.left = Math.random() * 90 + "vw";
    setTimeout(function () {
        balloon.style.top = "-20vh";
    }, 500);
}
// function to make the balloon go up within random time------//
(function loop() {
    var rand = Math.round(Math.random() * 10);
    setTimeout(function () {
        createNewBalloon();
        console.log("Delayed " + rand + " secs.");
        loop();
    }, rand * 1000);
})();
// function play_single_sound() {
//   let audioPlayer: any = document.getElementById("audiotag1");
//   audioPlayer.play();
// }
//make the balloon pop and make a sound when clicked
function balloonExplodes(event) {
    event;
    var audio = new Audio("./dist/audio_file.mp3");
    audio.play();
    event.target.src = "./dist/boom7.png";
}
