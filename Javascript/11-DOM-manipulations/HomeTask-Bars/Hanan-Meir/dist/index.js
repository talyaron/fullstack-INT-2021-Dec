var numberArray = [25, 55, 30];
var warp = document.querySelector(".wrapper");
var sti = document.querySelectorAll(".stick");
console.dir(sti);
console.log(sti[0].id);
for (var i = 0; i < numberArray.length; i++) {
    var bar = sti[i];
    bar.style.width = '100px';
    bar.style.height = numberArray[i] * 5 + "px";
    bar.innerText = numberArray[i];
    bar.style.top = 500 - numberArray[i] * 5 + "px";
}
;
function refresh() {
    for (var i = 0; i < sti.length; i++) {
        sti[i].innerHTML = sti[i].id;
        sti[i].style.backgroundColor = getRandomColorRgb();
    }
}
setInterval(refresh);
function getRandomColorRgb() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
