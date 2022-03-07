var numbersArray = [10, 15, 25, 14, 30, 17, 60];
var wrapper = document.querySelector(".wrapper");
var bars = document.querySelectorAll(".bar");
for (var i = 0; i < numbersArray.length; i++) {
    var bar = bars[i];
    bar.style.width = '100px';
    bar.style.height = numbersArray[i] * 5 + "px";
    bar.innerText = numbersArray[i];
    bar.style.top = 500 - numbersArray[i] * 5 + "px";
}
