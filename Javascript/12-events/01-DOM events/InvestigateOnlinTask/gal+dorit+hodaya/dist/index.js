var hodayaLoOna = document.querySelector("#meteor");
var doritIsAwake = document.querySelectorAll(".dorit");
var boomImg = document.querySelector("#boomImg");
console.log("top of boomImg " + boomImg.style.top);
console.log("top of doritIsAwake " + doritIsAwake[0].style.top);
//console.log(boomImg)
// hodayaLoOna.onmousemove= wakeUpHodaya;
// hodayaLoOna.ondblclick=bokerTovHodaya;
// hodayaLoOna.onmouseover=dorit;
// doritIsAwake.onmouseenter=wen;
doritIsAwake.forEach(function (element) {
    element.onclick = MouseBoom;
});
function MouseBoom(ev) {
    ev.target.style.backgroundColor = "pink";
    boomImg.style.top = ev.target.style.top + 150;
    boomImg.style.left = ev.target.style.left + 150;
    boomImg.opacity = 0;
}
function wen(ev) {
    ev.target.innerHTML += "<div>(" + ev.x + ", " + ev.y + ") </div>";
    ev.target.style.top = getRandomInt(100) + "vw";
    ev.target.style.left = getRandomInt(100) + "vw";
}
function wakeUpHodaya(ev) {
    ev.target.style.backgroundColor = getRandomColor();
}
function bokerTovHodaya(ev) {
    alert("boker tov hodaya motek");
}
function dorit(ev) {
    ev.target.innerHTML += "<div>(" + ev.x + ", " + ev.y + ") </div>";
}
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
