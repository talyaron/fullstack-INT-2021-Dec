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
// const move:any=document.querySelectorAll ("#move")
//  move.onmouseover=boomFunc;
//  function move(ev){
//  }
// if(elm2p.leftPosition > elm1p.leftPosition && elm2p.leftPosition <elm1p.rightPosition){
//     console.log('Overlap')
// } else{
//     console.log('No Overlap')
// }
// ----2-----
// Crafty.init(200, 200);
// var dim1 = {x: 5, y: 5, w: 50, h: 50}
// var dim2 = {x: 20, y: 10, w: 60, h: 40}
// var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");
// var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(2).attr(dim2).color("blue");
// rect2.bind("EnterFrame", function () {
//     if (rect1.x < rect2.x + rect2.w &&
//         rect1.x + rect1.w > rect2.x &&
//         rect1.y < rect2.y + rect2.h &&
//         rect1.h + rect1.y > rect2.y) {
//         // collision detected!
//         this.color("green");
//     } else {
//         // no collision
//         this.color("blue");
//     }
// });
//   ------3-----
//     return (
//       domRect1.top > domRect2.bottom ||
//       domRect1.right < domRect2.left ||
//       domRect1.bottom < domRect2.top ||
//       domRect1.left > domRect2.right
//     );
//   }
//   const el1 = document.getElementsByClassName('wrapper1');
//   const el2 = document.getElementsByClassName('wrapper2');
// console.log(elementsOverlap(el1, el2))
