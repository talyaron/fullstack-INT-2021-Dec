var balloons = document.querySelectorAll(".balloon");
console.dir(balloons);
// moveBalloons(balloons)
// function moveBalloons(balloons:NodeListOf<HTMLImageElement>){
//     balloons.forEach(balloon=>{
//         moveBalloon(balloon);
//     })
// }
function createBalloon() {
    var balloonId = uid();
    document.body.innerHTML += "<img id = " + balloonId + " class ='balloon' src= \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Red_toy_balloon.svg/491px-Red_toy_balloon.svg.png?20090312193428\"/>";
    var balloon = document.querySelector("#" + balloonId);
    moveBalloon(balloon);
}
function moveBalloon(balloon) {
    balloon.style.top = "125vh";
    balloon.style.left = Math.random() * 90 + "vw";
    setTimeout(function () {
        balloon.style.top = "-25vh";
    }, 100);
}
;
setInterval(createBalloon, 6000);
function uid() {
    return "id-" + Math.floor(Math.random() * 1e8);
}
function handleClick(ev) {
    ev;
    var audio = new Audio("1.wav");
    audio.play();
}
