var boxie = document.querySelectorAll('.box');
// boxie.onclick = mOver
// function mOut(event) {
//     event.target.innerHTML = "click me hard"}
// function mOver(event) {
//     event.target.innerHTML = "Thank You"}
boxie.onmouseover = puffBox;
// boxie.onmouseleave=mOut
// boxie.addEventListener('gotpointercapture', () => {
//     console.log('I\'ve been captured!')
//   });
//   boxie.addEventListener('pointerdown', (event) => {
//     boxie.setPointerCapture(event.pointerId);
//   });
function puffBox(boxie) {
    boxie.forEach(function (a) {
        a.target.style.onmouseover = resizing;
    });
}
function resizing() {
    boxie.style.clientHeight = "0px";
    boxie.style.clientWidth = "0px";
}
console.dir(boxie);
