var meteaor = document.querySelectorAll(".boom-boi");
//  window.addEventListener("keydown", move)
// console.dir(meteaor)
function createNewPosition() {
    meteaor.forEach(function (a) {
        a.style.top = getRandomNumber() + "vh";
        a.style.left = getRandomNumber() + "vw";
    });
}
function getRandomNumber() {
    var random = Math.floor(Math.random() * 90);
    return random;
}
setInterval(createNewPosition, 1000);
