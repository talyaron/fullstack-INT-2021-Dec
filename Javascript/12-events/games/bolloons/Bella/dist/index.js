// const getRandom = (min:number, max:number) => Math.floor(Math.random()*(max-min+1)+min);
// const balloons:any = document.querySelectorAll('.baloonns');
// const container = document.querySelector ('.container');
// let i=0
// for (i; i<4; i++) {
// const balloons = document.createElement ('img');
// balloons.src = "./balloons.png"
// balloons.width = 200;
// container.appendChild (balloons);
// }
// function moveBalloons() {
//     balloons.forEach(element => {
//         element.style.top = `-12vh`;
//         element.style.left = `${getRandom()}vw`;
//     });
// }
// function getRandom() {
//     let random = Math.floor(Math.random() * 100);
//     return random;
// }
// moveBalloons()
// setInterval(moveBalloons, 1000);
//create balloon
// -> move balloon
// in random times....
var balloons = document.querySelectorAll('.balloon');
console.dir(balloons);
function createBalloon() {
    var balloonId = uid();
    document.body.innerHTML += "<img id='" + balloonId + "' class='balloon' src=\"./dist/balloons.png\"/>";
    var balloon = document.querySelector("#" + balloonId);
    moveBalloon(balloon);
}
function moveBalloon(balloon) {
    balloon.style.top = '112vh';
    balloon.style.left = Math.random() * 90 + "vw";
    setTimeout(function () {
        balloon.style.top = '-12vh';
    }, 100);
}
setInterval(createBalloon, 1000);
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
