var ballons = document.querySelectorAll("#ballon");
console.dir(ballons);
///////////Function move objects
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
flyBallon();
setInterval(flyBallon, 1000);
