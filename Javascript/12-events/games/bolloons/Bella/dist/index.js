// const getRandom = (min:number, max:number) => Math.floor(Math.random()*(max-min+1)+min);
// const balloons:any = document.querySelectorAll('.baloonns');
var container = document.querySelector('.container');
var i = 0;
for (i; i < 4; i++) {
    var balloons = document.createElement('img');
    balloons.src = "./balloons.png";
    balloons.width = 200;
    container.appendChild(balloons);
}
function moveBalloons() {
    balloons.forEach(function (element) {
        element.style.top = "-12vh";
        element.style.left = getRandom() + "vw";
    });
}
function getRandom() {
    var random = Math.floor(Math.random() * 100);
    return random;
}
moveBalloons();
setInterval(moveBalloons, 1000);
