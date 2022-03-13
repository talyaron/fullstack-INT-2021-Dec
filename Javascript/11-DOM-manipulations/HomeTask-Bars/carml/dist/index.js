var bigbox = document.querySelector(".box");
var myArray = [23, 18, 11, 34, 56];
function getSomeColor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
myArray.forEach(function (Element) {
    var col = document.createElement("div");
    var tex = document.createElement("h5");
    bigbox.appendChild(col);
    col.appendChild(tex);
    col.className = "col";
    col.style.width = "50px";
    col.style.height = 10 * Element + 'px';
    col.style.borderColor = "black";
    col.style.borderStyle = "groove";
    tex.innerHTML = Element + '';
    var newcolor = getSomeColor();
    col.style.backgroundColor = newcolor;
});
var smallbox = document.createElement("h3");
smallbox.innerHTML = "[" + myArray + "]";
bigbox.appendChild(smallbox);
bigbox.style.display = "flex";
bigbox.style.justifyContent = "space-evenly";
bigbox.style.alignItems = "flex-end";
console.dir(bigbox);
console.dir(myArray);
