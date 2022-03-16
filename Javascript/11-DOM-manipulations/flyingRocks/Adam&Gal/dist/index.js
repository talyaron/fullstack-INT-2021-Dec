// const canvas=document.querySelector('canvas');
// const ctx=canvas.getContext('2d');
// const width=canvas.width=window.innerWidth;
// const height=canvas.height=window.innerHeight;
// console.log(canvas)
// function ast(x,y,velx,vely,color,size){
//     this.x=x; //start
//     this.y=y;
//     this.velx=velx; //direction
//     this.vely=vely;
//     this.color=color;
//     this.size=size;
// }
var wrapper1 = document.querySelectorAll('.wrapper1');
var wrapper2 = document.querySelectorAll('.wrapper2');
console.dir(wrapper1, wrapper2);
function listRandomNumber(number) {
    var num = Math.floor(Math.random() * number);
    return num;
}
function getRandom() {
    var randomPX = Math.floor(Math.random() * 100);
    return randomPX + "vh";
}
function RandomRotation1() {
    wrapper1.forEach(function (element) {
        element.style.transform = "rotate(" + listRandomNumber(360) + "deg)";
    });
}
function RandomRotation2() {
    wrapper2.forEach(function (element) {
        element.style.transform = "rotate(" + listRandomNumber(360) + "deg)";
    });
}
function meteor1() {
    wrapper1.forEach(function (element) {
        element.style.top = listRandomNumber(5) + "vh";
        element.style.bottom = listRandomNumber(10) + "vh";
        element.style.left = listRandomNumber(30) + "vv";
        element.style.right = listRandomNumber(30) + "vw";
        element.style.transform = "translate(" + getRandom() + ", " + getRandom() + ")";
    });
    setTimeout(meteor1, 5000);
}
function meteor2() {
    wrapper2.forEach(function (element) {
        element.style.top = listRandomNumber(5) + "vh";
        element.style.bottom = listRandomNumber(10) + "vh";
        element.style.left = listRandomNumber(30) + "vv";
        element.style.right = listRandomNumber(30) + "vw";
        element.style.transform = "translate(" + getRandom() + ", " + getRandom() + ")";
    });
    setTimeout(meteor2, 5000);
}
RandomRotation1();
RandomRotation2();
meteor1();
meteor2();
// setInterval (wrapper1, 3000)
// setInterval (wrapper2, 3000)
var elm1 = document.querySelector('.wrapper1');
var elm2 = document.querySelector('.wrapper2');
var elm2p = { leftPosition: elm2.getBoundingClientRect().x };
console.log(elm2p);
var elm1p = {
    leftPosition: elm1.getBoundingClientRect().x,
    rightPosition: elm1.getBoundingClientRect().right
};
console.log(elm1p);
if (elm2p.leftPosition > elm1p.leftPosition && elm2p.leftPosition < elm1p.rightPosition) {
    console.log('Overlap');
}
else {
    (elm2p.leftPosition < elm1p.leftPosition && elm2p.leftPosition > elm1p.rightPosition);
    console.log('no Overlap');
}
var MouseBoom = document.querySelectorAll;
MouseBoom.onmouseover = mouseInv;
function mouseInv(ev) {
    MouseBoom.style.top = ev.target.style.top + 150;
    MouseBoom.style.left = ev.target.style.left + 150;
    MouseBoom.opacity = 0;
}
