var baloons = document.querySelectorAll(".baloon");
window.requestAnimationFrame(baloonRandom);
var intervalID = setInterval(baloonRandom, 5000);
function baloonsUp() {
    baloons.forEach(function (element) {
        element.style.top = 0 + "vh";
    });
}
baloonsUp();
