var score = document.querySelector('.score');
var timer = document.querySelector('.timer');
var scoreCounter = 0;
var timerCounter = 0;
var audio = new Audio();
audio.src = './audio/Plop.ogg';
function createNewBaloon() {
    var arrDivs = [];
    for (var i = 0; i < 15; i++) {
        var newBaloon = document.createElement('div');
        newBaloon.classList.add('baloon');
        newBaloon.style.top = getRandomTop() + "px";
        newBaloon.style.left = getRandomLeft() + "px";
        document.body.appendChild(newBaloon);
        arrDivs.push(newBaloon);
    }
    setInterval(function () {
        arrDivs.forEach(function (e) {
            e.onclick = handleClick;
            var x = parseInt(e.style.top);
            if (x > -150) {
                x -= 5;
                e.style.top = x + 'px';
            }
        });
    }, 50);
}
function handleClick(ev) {
    audio.play();
    ev.target.style.display = 'none';
    scoreCounter += 1;
    score.innerHTML = "Score: " + scoreCounter;
}
function getRandomTop() {
    var a = Math.floor((Math.random() * 1000) + 1000);
    return a;
}
function getRandomLeft() {
    var a = Math.floor(Math.random() * innerWidth - 100);
    if (a < 100) {
        a += 100;
    }
    return a;
}
function timerFun() {
    timerCounter += 1;
    timer.innerHTML = "Time: " + timerCounter;
    if (timerCounter == 30) {
        clearInterval(baloonInter);
        clearInterval(timeInter);
    }
}
createNewBaloon();
var baloonInter = setInterval(createNewBaloon, 5000);
var timeInter = setInterval(timerFun, 1000);
