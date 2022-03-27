var balloons = document.querySelectorAll('.balloon');
console.dir(balloons);
function createBalloon() {
    var balloonId = uid();
    document.body.innerHTML += "<img id='" + balloonId + "' class='balloon' src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Purple_toy_balloon.svg/491px-Purple_toy_balloon.svg.png?20090312194251\" />";
    var balloon = document.querySelector("#" + balloonId);
    moveBalloon(balloon);
}
function moveBalloon(balloon) {
    balloon.style.top = '112vh';
    balloon.style.left = Math.random() * 90 + "vw";
    setTimeout(function () {
        balloon.style.top = '-12vh';
    }, 100);
}
setInterval(createBalloon, 4000);
function uid() {
    return "id-" + Math.ceil(Math.random() * 1e8);
}
