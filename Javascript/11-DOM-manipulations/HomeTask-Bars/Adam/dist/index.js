var WinCount = document.querySelectorAll(".bar");
console.dir(WinCount);
var wrapper = document.querySelector(".wrapper");
var values = [7, 5, 3, 3, 3];
for (var i = 0; i < values.length; i++) {
    WinCount[i].style.width = "100px";
    WinCount[i].style.height = values[i] * 4 + "px";
    WinCount[i].innerText = "" + values[i];
}
