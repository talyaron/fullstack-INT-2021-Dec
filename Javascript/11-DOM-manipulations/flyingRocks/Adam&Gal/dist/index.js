var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
console.log(canvas);
function ast(x, y, velx, vely, color, size) {
    this.x = x; //start
    this.y = y;
    this.velx = velx; //direction
    this.vely = vely;
    this.color = color;
    this.size = size;
}
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
AUDIO;
var aud = new Audio();
aud.src = 'https://www.winhistory.de/more/winstart/down/owfw311.wav';
IMAGE;
var meteor = new Image();
meteor.src = "";
// const wrapper1:any= document.querySelectorAll('.wrapper1');
// // const wrapper2:any=document.querySelectorAll('.wrapper2');
// console.dir(wrapper1);
// function getRandom(){
//     const randomPX = Math.floor(Math.random() * 100)
//     return `${randomPX}vh`
// }
// function RandomRotation1(){
//     wrapper1.forEach(element => {
//         element.style.transform = `rotate(${listRandomNumber(360)}deg)`
//     });
// }
// function meteor1 (){
//     wrapper1.forEach(element => {
//         element.style.top=listRandomNumber(5)+`vh`
//         element.style.bottom=listRandomNumber(10)+`vh`
//         element.style.left=listRandomNumber(30)+`vv`
//         element.style.right=listRandomNumber(30)+`vw`
//         element.style.transform = `translate(${getRandom()}, ${getRandom()})`
//     });
//     setTimeout (meteor1,5000)
// }
// RandomRotation1()
// meteor1()
// const elm1 = document.querySelector('.wrapper1');
// // const elm2 = document.querySelector('.wrapper2');
// const elm2p ={leftPosition:elm1.getBoundingClientRect().x}
// console.log(elm2p)
// const elm1p = {
//     leftPosition:elm1.getBoundingClientRect().x,
//     rightPosition:elm1.getBoundingClientRect().right
// }
// console.log(elm1p)
// if(elm2p.leftPosition > elm1p.leftPosition && elm2p.leftPosition < elm1p.rightPosition){
//     console.log('Overlap')
// } else{
//     (elm2p.leftPosition < elm1p.leftPosition && elm2p.leftPosition > elm1p.rightPosition)
//     console.log('no Overlap')
// }
// const MouseBoom:any=document.querySelectorAll
// MouseBoom.onmouseover=mouseInv;
// function mouseInv(ev){
//     MouseBoom.style.top= ev.target.style.top+150
//     MouseBoom.style.left=ev.target.style.left+150
//     MouseBoom.opacity=0
// }
