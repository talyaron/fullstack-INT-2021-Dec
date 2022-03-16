var wrapper1 = document.querySelectorAll('.wrapper1');
// const wrapper2:any=document.querySelectorAll('.wrapper2');
console.dir(wrapper1);
function meteor1() {
    setInterval(function () {
        wrapper1.forEach(function (element) {
            //console.log(listRandomNumber())
            element.style.top = listRandomNumber();
            element.style.left = listRandomNumber();
            element.style.transform = "translate(" + listRandomNumber() + ", " + listRandomNumber() + ")";
            //isOverlap()
        });
        isOverlap();
    }, 2000);
    //setTimeout (meteor1,5000)
}
var x1 = 0;
var y1 = 0;
var right1 = 0;
var bottom1 = 0;
var x2 = 0;
var y2 = 0;
var right2 = 0;
var bottom2 = 0;
function isOverlap() {
    for (var i = 0; i < wrapper1.length; i++) {
        x1 = wrapper1[i].getBoundingClientRect().x;
        right1 = wrapper1[i].getBoundingClientRect().right;
        bottom1 = wrapper1[i].getBoundingClientRect().bottom;
        y1 = wrapper1[i].getBoundingClientRect().y;
        for (var j = i + 1; j < wrapper1.length; j++) {
            x2 = wrapper1[j].getBoundingClientRect().x;
            right2 = wrapper1[j].getBoundingClientRect().right;
            bottom2 = wrapper1[j].getBoundingClientRect().bottom;
            y2 = wrapper1[j].getBoundingClientRect().y;
            if (x1 > x2 && x1 < right2 && y1 > y2 && y1 < bottom2) {
                console.log("overlap");
            }
        }
    }
}
function listRandomNumber() {
    var randomPX = Math.floor(Math.random() * 300);
    return randomPX + "px";
}
meteor1();
// function RandomRotation1(){
//     wrapper1.forEach(element => {
//         element.style.transform = `rotate(${listRandomNumber()}deg)`
//     });
// }
//RandomRotation1()
//const elm1 = document.querySelector('.wrapper1');
// const elm2 = document.querySelector('.wrapper2');
// const elm2p ={leftPosition:elm1.getBoundingClientRect().x}
// console.log(elm2p)
// const elm1p = {
//     leftPosition:elm1.getBoundingClientRect().x,
//     rightPosition:elm1.getBoundingClientRect().right,
//     bottomPosition:elm1.getBoundingClientRect().bottom,
//     topPosition:elm1.getBoundingClientRect().y
// }
// }
// if(elm2p.leftPosition > elm1p.leftPosition && elm2p.leftPosition < elm1p.rightPosition && elm2p.leftPosition > elm1p.bottomPosition ){
//     console.log('Overlap')
// } else{
//    // (elm2p.leftPosition < elm1p.leftPosition && elm2p.leftPosition > elm1p.rightPosition)
//     console.log('no Overlap')
// }
//const MouseBoom:=document.querySelectorAll
wrapper1.forEach(function (elem) {
    elem.onmouseover = mouseInv;
    elem.onmouseleave = mouseHop;
});
function mouseInv(ev) {
    //ev.target.style.top= ev.target.style.top+150
    //ev.target.style.left=ev.target.style.left+150
    ev.target.style.opacity = 0;
}
function mouseHop(ev) {
    //ev.target.style.top= ev.target.style.top+150
    //ev.target.style.left=ev.target.style.left+150
    ev.target.style.opacity = 1;
}
