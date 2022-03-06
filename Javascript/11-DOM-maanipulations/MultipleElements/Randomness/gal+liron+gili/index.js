var boxs = document.querySelectorAll('.box');
console.dir(boxs);
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(function (element) {
    element.style.backgroundColor = getRandomColor();
});
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
boxs.forEach(function (element) {
    element.style.backgroundColor = getRandomColor();
});
function listRandomboxs(boxs) {
    var radomLength = Math.floor(Math.random() * boxs.length);
    var randomArray = [];
    for (var i = 0; i <= radomLength; i++) {
        var randomIndex = Math.floor(Math.random() * boxs.length);
        randomArray.push(boxs[randomIndex]);
        boxs.splice(randomIndex, 1);
    }
    console.log(randomArray);
}
