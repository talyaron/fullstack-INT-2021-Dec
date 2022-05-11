var positions = {};
window.onload = function () {
    setInterval(function () {
        moveAstroid('astroid1');
        moveAstroid('astroid2');
        moveAstroid('astroid3');
        moveAstroid('astroid4');
        moveAstroid('astroid5');
        console.log(positions);
    }, 1000);
};
function moveAstroid(id) {
    var astroid = document.getElementById(id);
    var x = getRandomNumber(1, 100);
    var y = getRandomNumber(1, 100);
    positions[id + "x"] = x;
    positions[id + "y"] = y;
    astroid.style.top = x + "vh";
    astroid.style.left = y + "vw";
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
