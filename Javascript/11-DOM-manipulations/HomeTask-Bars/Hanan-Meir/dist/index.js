var numberArray = [25, 55, 30];
var warp = document.querySelector(".wrapper");
var sti = document.querySelectorAll(".stick");
for (var i = 0; i < numberArray.length; i++) {
    var bar = sti[i];
    bar.style.width = '100px';
    bar.style.height = numberArray[i] * 5 + "px";
    bar.innerText = numberArray[i];
    bar.style.top = 500 - numberArray[i] * 5 + "px";
    bar.style.backgroundColor = getRandomColor();
}
;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 3; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}
