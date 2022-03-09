var barsNumbers = [40, 60, 45, 30, 69, 20];
function displayBarsHeight(numContainer) {
    var barWrapper = document.getElementById("barsWrapper");
    var bars = [];
    for (var i = 0; i < numContainer.length; i++) {
        var currentNum = document.createElement("p");
        currentNum.innerText = numContainer[i];
        bars.push(document.createElement("div"));
        bars[i].className = 'bar';
        bars[i].style.height = numContainer[i] + "px";
        barWrapper.appendChild(bars[i]);
        bars[i].appendChild(currentNum);
    }
}
displayBarsHeight(barsNumbers);
