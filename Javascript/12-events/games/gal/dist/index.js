var ballon1 = document.querySelector(".balon1");
var ballon2 = document.querySelector(".balon2");
var ballon3 = document.querySelector(".balon3");
var ballonArray = [ballon1, ballon2, ballon3];
function amazingBallons() {
    ballonArray.forEach(function (element) {
        element.style.top = -30 + "vh";
        element.style.left = getRandomPosition;
    });
}
setInterval(amazingBallons);
function getRandomPosition() {
    var randonsize = Math.floor(Math.random() * 100);
    return randonsize;
}
