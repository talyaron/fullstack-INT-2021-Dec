"use strict";
exports.__esModule = true;
function handleGetText(event) {
    console.dir(event);
    console.log(event.key);
    console.log(event.target.value);
    var root = document.querySelector('#rootOfTask');
    root.innerText = event.target.value;
}
// const particle1:any = document.querySelector(".particle");
// particle1.forEach(particle => {
//     particle.style.opacity = 1;
// })
function handleChangeColor(event) {
    console.log(event.target.value);
    document.body.style.backgroundColor = event.target.value;
}
function handleCheck(event) {
    console.dir(event);
    console.log(event.target.checked);
    if (event.target.value = "true") {
    }
}
