var balloons = document.querySelectorAll('.balloon');
// balloons.forEach(element => {
//     element.style.top = '112vh';
// });
function goingUp() {
    balloons.forEach(function (element) {
        element.style.left = getRandomNumber() + "vw";
        element.style.top = '0vh';
    });
}
function getRandomNumber() {
    var random = Math.floor(Math.random() * 90);
    return random;
}
goingUp();
