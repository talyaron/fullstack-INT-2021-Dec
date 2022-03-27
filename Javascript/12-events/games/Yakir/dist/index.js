var balloons = document.querySelectorAll('.balloon');
var body = document.querySelector('body');
var userScore = document.querySelector('#userScore');
var countUserScore = 0;
// New Baloon element
function createBalloon() {
    var newBalloon = document.createElement('div');
    body.append(newBalloon);
    newBalloon.classList.add('balloon');
    var balloonImg = document.createElement('img');
    newBalloon.append(balloonImg);
    balloonImg.src = "./img/redBaloon.png";
    newBalloon.addEventListener('click', handleClick);
    return newBalloon;
}
// baloon explosion + count player score
// game time is 30sec each game
function handleClick(ev) {
    ev;
    ev.target.src = './img/explosion.png';
    var audio = new Audio("./audio/explosion.wav");
    audio.play();
    countUserScore++;
    //update the score after each explosion on screen and on console log
    console.log("user Score is " + countUserScore);
    userScore.innerHTML = "User Score is: " + countUserScore;
}
// random Time for Crate Baloons
function getRandomInterval() {
    var random = Math.floor(Math.random() * 10000);
    return random;
}
// random start position:
function getRandomPosition() {
    var random = Math.floor(Math.random() * 50);
    return random;
}
// balloonUP
function balloonUp(Balloon, interval) {
    Balloon.style.left = getRandomPosition() + 'vw';
    setInterval(function () {
        Balloon.style.top = '-25vh';
    }, interval);
}
function gameOver() {
    var finalScore = 0 + countUserScore;
    document.querySelector('#gameOver').innerHTML = "Game Over user final Scor is " + finalScore + ",\n    <br> you can keep play or refresh for new game";
}
// Start game function , create balloon that start go up in random times and every 5 sec :
function startGame() {
    balloonUp(createBalloon(), 5000); // every 5 sec
    balloonUp(createBalloon(), getRandomInterval()); // random time
    balloonUp(createBalloon(), getRandomInterval()); // random time
    setTimeout(function () {
        gameOver();
    }, 5000);
}
// Time to start a new game:
setInterval(startGame, 1000);
