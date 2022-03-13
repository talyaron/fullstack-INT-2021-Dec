var bars = [15, 30, 45, 60, 75, 90];
var wrapper = document.querySelector('.wrapper');
function createBars(arr) {
    arr.forEach(function (elm) {
        console.log(elm);
        var newBar = document.createElement('div');
        var barValue = document.createElement('p');
        newBar.style.height = elm + "%";
        newBar.classList.add('bar-style');
        barValue.innerHTML = elm + "%";
        barValue.classList.add('bar-text');
        newBar.append(barValue);
        wrapper.append(newBar);
    });
}
createBars(bars);
