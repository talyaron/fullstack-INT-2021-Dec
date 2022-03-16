var images = document.querySelectorAll(".meteorImg");
console.log(images);
function randomMovement() {
    var random = Math.round(Math.random() * 90);
    return random;
}
function moveImages() {
    images.forEach(function (element) {
        element.style.left = randomMovement() + "vw";
        element.style.top = randomMovement() + "vh";
        console.log(element.style.left);
        console.log(element.style.top);
    });
}
window.requestAnimationFrame(moveImages);
setInterval(moveImages, 4500);
console.log(randomMovement());
moveImages();
var idk = images[0].getBoundingClientRect();
console.log(idk);