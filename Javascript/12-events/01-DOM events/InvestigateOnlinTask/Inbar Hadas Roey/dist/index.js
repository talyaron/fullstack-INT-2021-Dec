var box = document.querySelector("#box");
var divScore = document.querySelector("#score");
box.onclick = handleClick;
var score = 0;
function handleClick(ev) {
    var element = ev.target;
    element.innerHTML = "<div id = \"divScore\">" + ++score + "</div>";
    console.log(ev);
    console.log(score);
}
var changeColor = document.querySelector(".itemOne");
var changeSize = document.querySelector(".itemTwo");
var rotate = document.querySelector(".itemThree");
var powerUp = document.querySelector(".itemFour");
changeColor.onclick = handleColor;
function handleColor(ev) {
    if (score >= 5) {
        box.style.backgroundColor = getRandomColor();
        score = score - 5;
        box.innerHTML = "<div id = \"divScore\">" + score + "</div>";
        console.log(score);
    }
}
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
