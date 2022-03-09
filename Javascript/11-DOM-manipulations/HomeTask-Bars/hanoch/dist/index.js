var schema = [50, 60, 100];
schema.forEach(function (elm) {
    var Div = document.createElement("bar__multiple");
    Div.classList.add("bar__multiple");
    Div.style.height = (elm * 2) + "px"; //The number is multyplayed by two for definition purposes
    var text = document.createTextNode("" + elm);
    Div.appendChild(text);
    var bar = document.getElementById("bar");
    bar.appendChild(Div);
});
