var myBars = document.querySelectorAll('.column');
var myWrapper = document.querySelector('.wrapper');
var numbersArr = [10, 26, 50, 14, 70, 84, 6];
var myText = document.querySelectorAll('.text');
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
for (var i = 0; i < numbersArr.length; i++) {
    myBars[i].style.width = '80px';
    myBars[i].style.height = numbersArr[i] * 5 + "px";
    myBars[i].style.backgroundColor = getRandomColor();
    myText[i].innerHTML = "" + numbersArr[i];
}
// console.dir(myBars)
