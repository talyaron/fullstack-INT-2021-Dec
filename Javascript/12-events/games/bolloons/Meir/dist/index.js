var ballons = document.querySelectorAll(".ballon");
var body = document.querySelector('body');
///////Function create balloon:
function createBalloons() {
    var myBalloons = document.createElement('div');
    body.append(myBalloons);
    myBalloons.classList.add('ballon');
    var balloonImg = document.createElement('img');
    myBalloons.append(balloonImg);
    balloonImg.src = "balloons.png";
    myBalloons.addEventListener('click', handleClick);
    return myBalloons;
}
///////////Function move objects
function flyBallon(Balloon, interval) {
    Balloon.element.style.left = getRandomPosition() + 'vw';
    setInterval(function () {
        Balloon.style.top = '-25vh';
    }, interval);
}
/////Function ramdomly position of objects
function getRandomPosition() {
    var random = Math.floor(Math.random() * 50);
    return random;
}
/////Function ramdomly interval of objects
function getRandomInterval() {
    var random = Math.floor(Math.random() * 10000);
    console.log(random / 1000 + "s");
    return random;
}
////Function that explote balloon and explonding sound
function handleClick(ev) {
    ev;
    var audio = new Audio("poomballon.wav");
    audio.play();
    ev.target.src = 'bombPicture.png';
}
////Start game Function
function startGame() {
    ballons.forEach(function (balloon) {
        flyBallon(createBalloons(), 5000);
    });
    flyBallon(createBalloons(), getRandomInterval());
}
setInterval(startGame, 2000);
