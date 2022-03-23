var balloons = document.querySelectorAll('.balloon');
var body = document.querySelector('body');
body.style.backgroundImage = 'url(./images/sky.jpg)';
// Function that create div with balloon picture:
function createBalloon() {
    var newBalloon = document.createElement('div');
    body.append(newBalloon);
    newBalloon.classList.add('balloon');
    var balloonImg = document.createElement('img');
    newBalloon.append(balloonImg);
    balloonImg.src = "images/blueBalloon.png";
    newBalloon.addEventListener('click', handleClick);
    return newBalloon;
}
// Function that changes the position of the balloons - from its position to the top of the screen, until it disappears:
function balloonUp(Balloon, interval) {
    Balloon.style.left = getRandomPosition() + 'vw';
    setInterval(function () {
        Balloon.style.top = '-25vh';
    }, interval);
}
// Function that get random start position:
function getRandomPosition() {
    var random = Math.floor(Math.random() * 50);
    return random;
}
// Function that get random time that new balloons created in screen and start go up:
function getRandomInterval() {
    var random = Math.floor(Math.random() * 10000);
    console.log(random / 1000 + "s");
    return random;
}
//Function that explode the balloon and makes an exploding sound
function handleClick(ev) {
    ev;
    var audio = new Audio("Exp3.mp3");
    audio.play();
    ev.target.src = 'Images/explodBalloon.jpg';
}
// Start game function , create balloon that start go up after 5 seconds :
function startGame() {
    balloons.forEach(function (balloon) {
        balloonUp(createBalloon(), 5000);
    });
    balloonUp(createBalloon(), getRandomInterval());
}
// Time to start a new game:
setInterval(startGame, 2000);
