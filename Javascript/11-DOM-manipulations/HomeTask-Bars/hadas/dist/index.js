var numberArrey = [10, 25, 40, 45, 70];
var wrapper = document.querySelector('.wrapper');
var bars = document.querySelectorAll('.bar');
for (var i = 0; i < numberArrey.length; i++) {
    var bar = bars[i];
    bar.style.width = '100px';
    bar.style.height = numberArrey[i] * 5 + "px";
    bar.innerText = numberArrey[i];
    bar.style.top = 500 - numberArrey[i] * 5 + "px";
}
