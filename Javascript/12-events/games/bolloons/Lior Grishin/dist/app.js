console.log('connected!');
var body = document.querySelector('body');
var ballons = document.querySelectorAll('.ballon');
body.style.backgroundImage = 'url(./images/Background.jpg)';
// Function :
// Setting Ballon position off-screen (bot) //
function setBallonDown(ballons) {
    ballons.forEach(function (element) {
        element.style.top = '100vh';
    });
}
// Function :
// Setting ballon off-screen (top)//
function setBallonUp(ballons) {
    ballons.forEach(function (element) {
        element.style.top = '-20vh';
    });
}
// Function:
// Setting ballon in random position on x axies
function setBallonRandomPosition(ballons) {
    ballons.forEach(function (element) {
        element.style.left = getRandomWidthStart() + "px";
    });
}
// Function:
// returns number between 0 - body's width
function getRandomWidthStart() {
    return Math.random() * body.offsetWidth;
}
