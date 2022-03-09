var wrapper = document.querySelectorAll('.wrapper');
console.dir(wrapper);
function listRandomNumber(number) {
    var num = Math.floor(Math.random() * number);
    return num;
}
function meteor() {
    wrapper.forEach(function (element) {
        element.style.top = listRandomNumber(80) + "vh";
        element.style.right = listRandomNumber(80) + "vh";
    });
}
function RandomRotation() {
    wrapper.forEach(function (element) {
        element.style.transform = "rotate(" + listRandomNumber(360) + "deg)";
    });
}
RandomRotation();
setInterval(wrapper, 3000);
