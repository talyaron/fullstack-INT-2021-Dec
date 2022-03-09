var bigbox = document.querySelector(".box");
var myArray = [23, 18, 11, 34, 56];
myArray.forEach(function (Element) {
    var col = document.createElement("div");
    bigbox.appendChild(col);
    col.style.width = "50px";
    col.style.height = 10 * Element + 'px';
    col.style.borderColor = "black";
    col.style.borderStyle = "groove";
    col.innerText = Element + '';
    console.dir(col);
    col.style.position = 'relative';
    // let newcolor=getSomeColor()
    // col.style.backgroundColor=newcolor+''
});
bigbox.style.display = "flex";
bigbox.style.justifyContent = "space-evenly";
bigbox.style.alignItems = "flex-end";
console.dir(bigbox);
console.dir(myArray);
function getSomeColor() {
    var one = Math.floor(Math.random() * 255);
    var two = Math.floor(Math.random() * 255);
    var three = Math.floor(Math.random() * 255);
    var thisColor = "(" + one + "," + two + "," + three + ")";
    return thisColor;
}
