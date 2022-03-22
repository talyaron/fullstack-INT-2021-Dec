var balloons = document.querySelectorAll('.balloon');
var body = document.querySelector('body');
// body.style.backgroundImage = 'url(./images/sky.jpg)'
balloons.forEach(function (balloon) {
    createBalloon(balloon);
});
function createBalloon(balloon) {
    var newBalloon = document.createElement('div');
    body.append(newBalloon);
    newBalloon.classList.add('balloon');
    var balloonImg = document.createElement('img');
    newBalloon.append(balloonImg);
    balloonImg.src = "images/blueBalloon.png";
    balloonUp(newBalloon);
}
function balloonUp(newBalloon) {
    setInterval(function () {
        newBalloon.style.top = '-25vh';
    }, 2000);
}
// function balloonFirstPosition()
