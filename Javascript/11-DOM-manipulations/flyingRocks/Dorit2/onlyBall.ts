//var canv =document.getElementById("myCanvas")
var canv:HTMLCanvasElement = document.querySelector("#myCanvas")
//const canv = document.createElement('canvas');
canv.style.transition = "all 2000ms"
canv.style.position = 'absolute';
canv.style.left = "250px"
canv.style.top = "250px"
canv.style.backgroundColor = "red"
const ctxc = canv.getContext('2d');
ctxc.beginPath();
ctxc.arc(18, 18, 15, 0, 2 * Math.PI);
ctxc.fill();

//const elB:HTMLCanvasElement = drawBall();
//document.getElementById('container').appendChild(elB);
//elB.id = "myBall"
//let elB = document.querySelector("#myCanvas")
//console.dir(elB)

console.dir(ctxc)
console.dir(canv)
//elB.style.backgroundColor = "black"

//myBall.style.backgroundColor = "black"

//console.dir(myBall)

