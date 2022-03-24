var ballons = ["ballon"];
var windowWidth = window.innerWidth;
var body = document.querySelector(".body");
var windowHeight = window.innerHeight;
var scores = document.querySelectorAll(".score");
var noPop = 0;
var total = 45;
var currentBallon = 0;
var gameOver = false;
var shadow = document.querySelector(".shadow");
var startBtn = document.querySelectorAll(".start-btn");
function createBallon() {
    var div = document.createElement("div");
    var rand = Math.floor(Math.random() * ballons.length);
    div.className = "ballon ballon-" + ballons[rand];
    rand = Math.floor(Math.random() * (windowWidth - 150));
    div.style.left = rand + "px";
    div.dataset.number = currentBallon;
    currentBallon++;
    document.body.appendChild(div);
}
;
animateBallon("div");
function animateBallon(elem) {
    var position = 0;
    var random = Math.floor(Math.random() * 6 - 3);
    var interval = setInterval(frame, 12 - Math.floor(noPop /
        10) + random);
}
;
function frame() {
    if (position >= (windowHeight + 150) && (document.querySelector("[data-number =\"" + elem.detaset.number + "\"]") !== null)) {
        clearInterval(Interval);
    }
    else {
        position++;
        elem.style.top = windowHeight - position + "px";
    }
}
;
function popBallons(elem) {
    elem.remove();
    noPop++;
    scorupdate();
}
function scorupdate() {
    for (var i = 0; i < scores.length; i++)
        scores[i].textContent = noPop;
}
;
function startGame() {
    restartGame();
    var timeOut = 0;
    var loop = setInterval(function () {
        timeOut = Math.floor(Math.random() * 600 - 100);
        if (!gameOver && noPop !== total) {
            createBallon();
        }
        else if (noPop !== total) {
            clearInterval(loop);
            shadow.style.display = "flex";
            shadow.querySelector(".loser").style.display =
                "block";
        }
        else {
            clearInterval(loop);
            shadow.style.display = "flex";
            shadow.querySelector(".winner").style.display =
                "block";
        }
    }, 800 + timeOut);
    function restartGame() {
        var forRemoving = document.querySelectorAll(".ballon");
        for (var i = 0; i < forRemoving.length; i++) {
            forRemoving[i].remove();
        }
        gameOver = false;
        noPop = 0;
        scorupdate();
    }
}
document.addEventListener("click", function (ev) {
    if (ev.target.classList.contains("ballon")) {
        popBallons(ev.target);
    }
});
document.querySelector(".restart").addEventListener("click", function () {
    shadow.style.display = "none";
    shadow.querySelector(".winner").style.display = "none";
    shadow.querySelector(".loser").style.display = "none";
    startGame();
});
document.querySelector("cancel").addEventListener(".click", function () {
    shadow.style.display = "none";
});
startBtn.addEventListener("click", function () {
    startGame();
    document.querySelector(".main-game").style.display = "none";
});
