console.log("hi");
/*Array of bars heights defiend*/
/*Adding numbers to the array will add a matching bar*/
var barsHeight = [47, 90, 30, 15, 85, 250, 36, 69];
/*For each elemnt in the array define a height as the number
suggests, and write the number*/
barsHeight.forEach(function (element) {
    var addedDiv = document.createElement("wrapper__bar");
    addedDiv.classList.add("wrapper__bar");
    addedDiv.style.height = (element * 2) + "px"; //The number is multyplayed by two for definition purposes
    var text = document.createTextNode("" + element);
    addedDiv.appendChild(text);
    var wrapper = document.getElementById("wrapper");
    wrapper.appendChild(addedDiv);
});
