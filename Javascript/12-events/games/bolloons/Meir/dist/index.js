var ballons = document.querySelectorAll("#ballon");
function flyBallon() {
    ballons.forEach(function (element) {
        element.style.top = '-16vh';
        element.style.left = getRandomPosition + "vw";
    });
}
function getRandomPosition() {
    var random = Math.floor(Math.random() * 100);
    return random;
}
flyBallon(ballons);
setInterval(flyBallon, 1000);
