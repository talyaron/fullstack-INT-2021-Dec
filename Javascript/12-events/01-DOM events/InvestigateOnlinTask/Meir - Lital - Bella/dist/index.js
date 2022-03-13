var aBox = document.querySelector("#aBox");
// document.onload = handleClick;
document.onscroll = handleClick;
var counter = 0;
function handleClick(ev) {
    console.log(counter);
    counter++;
    ev.stopPropagation();
    var element = ev.target;
}
console.dir(aBox);
