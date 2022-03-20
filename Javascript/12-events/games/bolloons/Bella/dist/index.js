// const getRandom = (min:number, max:number) => Math.floor(Math.random()*(max-min+1)+min);
var balloons = document.querySelectorAll('.baloonns');
console.dir(balloons);
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
// setInterval(moveBalloons, 1000);
moveBalloons();
