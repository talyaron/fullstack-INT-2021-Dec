var Populationsample = [];
Populationsample.forEach(function (element) {
    var addedDiv = document.createElement("wrapper__bar");
    addedDiv.classList.add("wrapper__bar");
    addedDiv.style.height = (element * 2) + "px";
    var text = document.createTextNode("" + element);
    addedDiv.appendChild(text);
    var wrapper = document.getElementById("wrapper");
    wrapper.appendChild(addedDiv);
});
