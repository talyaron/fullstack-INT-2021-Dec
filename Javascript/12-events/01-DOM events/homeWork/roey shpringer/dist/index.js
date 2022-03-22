var images = document.querySelectorAll(".starImg");
console.log(images);
function randomMovement() {
    var random = Math.round(Math.random() * 90);
    return random;
}
function moveImages() {
    images.forEach(function (element) {
        element.style.left = randomMovement() + "vw";
        element.style.top = randomMovement() + "vh";
    });
}
setInterval(moveImages, 4500);
moveImages();
