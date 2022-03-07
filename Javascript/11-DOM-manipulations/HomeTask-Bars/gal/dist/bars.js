var Populationsample = [10, 20, 30, 40, 50];
Populationsample.forEach(function (element) {
    var addedDiv = document.createElement("Bars");
    addedDiv.classList.add("bars");
    addedDiv.style.height = (element * 2) + "px";
    var text = document.createTextNode("" + element);
    addedDiv.appendChild(text);
    var bars = document.getElementById("bars");
    bars.appendChild(addedDiv);
});
