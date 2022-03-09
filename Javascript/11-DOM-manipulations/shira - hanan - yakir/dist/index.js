var ugiCron = document.querySelectorAll(".corona");
function coronaMove() {
    ugiCron.forEach(function (element) {
        element.style.top = randomPosition() + "vh";
        element.style.left = randomPosition() + "vw";
    });
}
console.log(ugiCron);
function randomPosition() {
    var postion;
    postion = Math.random() * 100;
    return postion;
}
var intervalID = setInterval(coronaMove, 1000);
