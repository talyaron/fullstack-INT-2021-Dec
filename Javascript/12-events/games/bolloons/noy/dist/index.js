var balloons = document.querySelectorAll(".balloon");
function moveBalloon() {
    balloons.forEach(function (element) {
        element.style.top = '-15vh';
        element.style.left = getRandomPosition() + "vw";
    });
}
setTimeout(moveBalloon);
// function that gets a random number for postion
function getRandomPosition() {
    var randonsize = Math.floor(Math.random() * 100);
    return randonsize;
}
