console.log("hi");
var metor = document.querySelectorAll('.metor');
console.dir(metor);
function getRandomNumber(num) {
    var num1 = Math.floor(Math.random() * num);
    console.log(num1);
    return num1;
}
function moveMetor() {
    metor.forEach(function (element) {
        element.style.top = getRandomNumber(85) + "vh";
        element.style.left = getRandomNumber(85) + "vh";
    });
}
function setRandomRotation() {
    metor.forEach(function (element) {
        element.style.transform = "rotate(" + getRandomNumber(360) + "deg)";
    });
}
setRandomRotation();
setInterval(moveMetor, 5000);
