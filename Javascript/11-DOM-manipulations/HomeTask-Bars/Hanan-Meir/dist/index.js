var numberArray = [25, 55, 30];
var warp = document.querySelector(".wrapper");
var sti = document.querySelectorAll(".stick");
var barColors = ['#FF6633', '#FFB399', '#FF33FF'];
for (var i = 0; i < numberArray.length; i++) {
    var bar = sti[i];
    bar.style.width = '100px';
    bar.style.height = numberArray[i] * 5 + "px";
    bar.innerText = numberArray[i];
    bar.style.top = 500 - numberArray[i] * 5 + "px";
}
;
