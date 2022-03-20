console.log('connected!');
var body = document.querySelector('body');
var ballons = document.querySelectorAll('.ballon');
body.style.backgroundImage = 'url(./images/Background.jpg)';
function moveBallonDown(ballons) {
    ballons.forEach(function (element) {
        element.style.top = '100vh';
    });
}
function moveBallonUp(ballons) {
    ballons.forEach(function (element) {
        element.style.top = '0vh';
    });
}
