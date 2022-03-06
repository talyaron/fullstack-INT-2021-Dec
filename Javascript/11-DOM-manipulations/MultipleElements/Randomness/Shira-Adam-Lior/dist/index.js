var boxes = document.querySelectorAll('.box');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
function getRandomSizeWidth() {
    var randomNumber = Math.floor(Math.random() * 10);
    return randomNumber + "vw";
}
function getRandomSizeHeight() {
    var randomNumber = Math.floor(Math.random() * 10);
    return randomNumber + "vh";
}
function getRandomTranslate() {
    var randomTransform = Math.floor(Math.random() * 90);
    return randomTransform + "vw";
}
function getRandomPXSize() {
    var randomPX = Math.floor(Math.random() * 100);
    return randomPX + "vh";
}
function everySecondChanges() {
    boxes.forEach(function (ele) {
        ele.style.backgroundColor = getRandomColor();
        ele.style.width = getRandomSizeWidth();
        ele.style.height = getRandomSizeHeight();
        ele.style.transform = "translate(" + getRandomPXSize() + ", " + getRandomPXSize() + ")";
    });
    setTimeout(everySecondChanges, 2000);
}
everySecondChanges();
