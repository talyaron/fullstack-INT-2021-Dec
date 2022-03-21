console.log('connected!');
var body = document.querySelector('body');
var balloons = document.querySelectorAll('.balloon');
body.style.backgroundImage = 'url(./images/Background.jpg)';
// Function :
// Setting Ballon position off-screen (bot) //
function setBalloonDown(balloons) {
    balloons.forEach(function (element) {
        element.style.top = '100vh';
    });
}
// Function :
// Setting ballon off-screen (top)//
function setBalloonUp(balloons) {
    balloons.forEach(function (element) {
        element.style.top = '-20vh';
    });
}
// Function:
// Setting ballon in random position on x axies
function setBalloonRandomPosition(balloons) {
    balloons.forEach(function (element) {
        element.style.left = getRandomWidthStart() + "px";
    });
}
// Function:
// returns number between 0 - body's width
function getRandomWidthStart() {
    return Math.random() * body.offsetWidth;
}
body.addEventListener('click', function (ev) {
    var mousePosition = [ev.clientX, ev.clientY];
    addBalloon(mousePosition);
});
function addBalloon(mousePosition) {
    var newBalloon = document.createElement('div');
    body.append(newBalloon);
    newBalloon.classList.add('balloon');
    newBalloon.style.left = mousePosition[0] + "px";
    newBalloon.style.top = mousePosition[1] + "px";
    var newBalloonImage = document.createElement('img');
    newBalloon.append(newBalloonImage);
    newBalloonImage.src = "images/balloon-blue.png";
    moveUp(newBalloon);
}
function moveUp(elm) {
    setTimeout(function () {
        elm.style.top = '-20vh';
    }, 1000);
}
