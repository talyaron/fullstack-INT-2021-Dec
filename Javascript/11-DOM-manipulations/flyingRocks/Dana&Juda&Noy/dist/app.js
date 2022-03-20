var getRandom = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min); };
var asteroids = document.querySelectorAll('#asteroid');
console.dir(asteroids);
asteroids.forEach(function (element) {
    element.style.top = getRandom(0, 100) + "vh";
    element.style.left = getRandom(0, 100) + "vw";
});
