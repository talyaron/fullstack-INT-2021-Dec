var getRandom = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
var balloons = document.querySelectorAll('.baloonns');
function moveBalloons() {
    balloons.forEach(function (element) {
        element.style.left = getRandom + 'px'; // 👈🏼 Horizontally
        element.style.top = getRandom + 'px'; // 👈🏼 Vertically 
    });
    setInterval(moveBalloons, 1000);
}
