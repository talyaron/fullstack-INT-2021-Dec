var numX = 0;
var numY = 0;
var lastNumX = 0;
var lastNumY = 0;
var num = 0;
function randomize(min, max) {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
function checkColision() {
    for (var i = 0; i < blackies.length; i++) {
        // let ballLeft:number = parseInt(myBall.style.left.slice(0,-2))
        // let ballRight:number = ballLeft + 40
        // let ballTop:number = parseInt(myBall.style.top.slice(0,-2))
        // let ballBottom:number = ballTop +40
        // let blackiLeft:number = parseInt(blackies[i].style.left.slice(0,-2))
        // let blackiRight:number = blackiLeft + 40
        // let blackiTop:number = parseInt(blackies[i].style.top.slice(0,-2))
        // let blackiBottom:number =blackiTop + 40
        // if((ballLeft > blackiLeft && ballLeft < blackiRight && ballTop > blackiTop && ballTop < blackiBottom) ||
        // (blackiLeft>ballLeft && blackiLeft<ballRight && blackiTop>ballTop&& blackiTop<ballBottom) ){
        //     console.log("c o l i s i o n")
        //     console.log(`ballleft ${ballLeft} blackileft ${blackiLeft} blackiright ${blackiRight}`)
        //     console.log(`balltop ${ballTop} blackitop ${blackiTop} blackibottom ${blackiBottom}`)
        //     blackies[i].style.opacity = 0
        // }
        var ballCenterX = parseInt(myBall.style.left.slice(0, -2)) + 12;
        var BallCenterY = parseInt(myBall.style.top.slice(0, -2)) + 12;
        var BlackiCenterX = parseInt(blackies[i].style.left.slice(0, -2)) + 50;
        var BlackiCenterY = parseInt(blackies[i].style.top.slice(0, -2)) + 50;
        var dx = ballCenterX - BlackiCenterX;
        var dy = BallCenterY - BlackiCenterY;
        //console.log(`blackiTop ${blackiTop} blackileft ${blackiLeft} blackiright ${blackiRight} blackibottom ${blackiBottom}`)
        //console.log(`balltop ${ballTop} ballleft ${ballLeft} ballright ${ballRight} ballbottom ${ballBottom}`)
    }
}
function drawWizard() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 112;
    canvas.height = 112;
    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
    return canvas;
}
function drawBall() {
    //console.log("drawing the ball")
    var canv = document.createElement('canvas');
    canv.style.transition = "all 2000ms";
    canv.style.position = 'absolute';
    canv.style.left = "250px";
    canv.style.top = "250px";
    canv.style.backgroundColor = "red";
    canv.width = 36;
    canv.height = 36;
    var ctxc = canv.getContext('2d');
    ctxc.beginPath();
    ctxc.fillStyle = "green"; //whichi color to see
    ctxc.arc(18, 18, 12, 0, 2 * Math.PI);
    ctxc.fill();
    return canv;
}
var elB = drawBall();
document.getElementById('container').appendChild(elB);
elB.id = "myBall";
//console.log(`first ball ${elB}`)
elB.style.position = "absolute";
elB.style.left = "250px";
elB.style.top = "250px";
var myBall = document.querySelector("#myBall");
//console.log(`we have one ball ${myBall}`)
for (var i = 0; i < 8; i++) {
    var el = drawWizard();
    document.getElementById('container').appendChild(el);
    el.id = "myCanvas";
    el.style.transition = "all 2000ms";
    el.style.position = 'absolute';
    num = randomize(300, 1000);
    el.style.width = "100px";
    el.style.height = "100px";
    if (num > 500) {
        num -= 300;
    }
    else if (num < 120) {
        num += 200;
    }
    numX = num;
    num = randomize(300, 1000);
    if (num > 500) {
        num -= 300;
    }
    else if (num < 120) {
        num += 200;
    }
    numY = num;
    if (Math.abs(numX - lastNumX) < 200) {
        numX = lastNumX + 200;
    }
    if (Math.abs(numY - lastNumY) < 200) {
        numY = lastNumY + 200;
    }
    lastNumX = numX;
    lastNumY = numY;
    el.style.left = numX + "px";
    el.style.top = numY + "px";
    //console.log(`left of el ${el.style.top}`)
}
var blackies = document.querySelectorAll("#myCanvas");
//let blackies:any = document.getElementById('container').children;
//console.dir(blackies)
setInterval(function () {
    num = randomize(300, 1000);
    if (num > 500) {
        num -= 300;
    }
    else if (num < 120) {
        num += 200;
    }
    myBall.style.left = num + "px";
    num = randomize(300, 1000);
    if (num > 500) {
        num -= 300;
    }
    else if (num < 120) {
        num += 200;
    }
    myBall.style.top = num + "px";
    //console.log(`we have the ball ${myBall}`)
    for (var i = 0; i < blackies.length; i++) {
        //console.dir(`i = ${i}`)
        num = randomize(300, 1000);
        if (num > 500) {
            num -= 300;
        }
        else if (num < 120) {
            num += 200;
        }
        numX = num;
        num = randomize(300, 1000);
        if (num > 500) {
            num -= 300;
        }
        else if (num < 120) {
            num += 200;
        }
        numY = num;
        if (Math.abs(numX - lastNumX) < 200) {
            numX = lastNumX + 200;
        }
        if (Math.abs(numY - lastNumY) < 200) {
            numY = lastNumY + 200;
        }
        blackies[i].style.left = numX + "px";
        blackies[i].style.top = numY + "px";
        lastNumX = numX;
        lastNumY = numY;
        //checkColision()
    }
    checkColision();
    //checkColision()
    // for(let b of blackies) {
    //     b.style.top = randomize(300,1000)+"px"
    //     b.style.left = randomize(300,1000)+"px"
    // }
}, 2000);
//console.log(blackies);
//drawImage(image, x, y)
//Draws the CanvasImageSource specified by the image parameter at the coordinates (x, y).  
