var barsNumbers = [20, 51, 68];
var barsContainer = document.querySelectorAll(".bar");
function displayBarsHeight(numContainer, bars) {
    for (var i = 0; i < numContainer.length; i++) {
        bars[i].style.height = numContainer[i];
    }
}
displayBarsHeight(barsNumbers, barsContainer);
console.log(barsContainer);
console.dir(barsContainer);
