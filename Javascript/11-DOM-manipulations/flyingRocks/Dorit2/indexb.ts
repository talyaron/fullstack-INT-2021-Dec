let numX:number = 0
let numY:number = 0
let lastNumX:number = 0
let lastNumY:number = 0
let num:number = 0
let blackies:NodeListOf<HTMLCanvasElement> = document.querySelectorAll("#myCanvas")
let myBall:HTMLElement = document.querySelector("#myBall")

function randomize(min,max){
    num = Math.floor(Math.random()*(max - min +1 ))+min
  
    return num
}

function checkColision(){
    console.log("checking")
    for(let i:number = 0;i<blackies.length;i++){
        if (blackies[i].style.opacity == "0"){
            i++
        }
        let ballCenterX:number =  parseInt(myBall.style.left.slice(0,-2)) + 12
        
        let ballCenterY:number =  parseInt(myBall.style.top.slice(0,-2)) + 12
      
        let blackiCenterX:number = parseInt(blackies[i].style.left.slice(0,-2)) + 50
     
        let blackiCenterY:number = parseInt(blackies[i].style.top.slice(0,-2)) + 50
       
        let dx:number = Math.abs(ballCenterX - blackiCenterX)
        console.log(`dx= ${dx}`)
        let dy:number = Math.abs(ballCenterY - blackiCenterY)
        console.log(`dy= ${dy}`)
        let distance:number = (dx + dy)/2
        console.log(`distance= ${distance}`)
        if (distance <= 62){
            console.log("c o l i s i o n")
            blackies[i].style.opacity = "0"
        }
        }
}

function drawWizard() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 120;
        canvas.height = 120;
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
    const canv = document.createElement('canvas');
    canv.style.transition = "all 2000ms"
    canv.style.position = 'absolute';
    canv.style.left = "250px"
    canv.style.top = "250px"
    canv.style.backgroundColor = "white"
    canv.width = 36;
    canv.height = 36;
    const ctxc = canv.getContext('2d');
    ctxc.beginPath();
    ctxc.fillStyle ="green"; //whichi color to see
    ctxc.arc(18, 18, 12, 0, 2 * Math.PI);
    ctxc.fill();
    return canv;
}
function addBall(){
    const elB = drawBall();
    document.getElementById('container').appendChild(elB);
    elB.id = "myBall"
    //console.log(`first ball ${elB}`)
    elB.style.position = "absolute"
    elB.style.left = "250px"
    elB.style.top = "250px"
    myBall = document.querySelector("#myBall")
//console.log(`we have one ball ${myBall}`)
}

function addBlackies(){
for (let i:number=0; i<8; i++) {
    const el = drawWizard();
    document.getElementById('container').appendChild(el);
    el.id = "myCanvas"
    el.style.transition = "all 2000ms"
    el.style.position = 'absolute';
    el.style.width = "120px"
    el.style.height = "120px"
    num = randomize(50,550)
    if(num<120){
        num += 200
    }
    numX = num
    num = randomize(50,550)
    if(num<120){
        num+=200
    }
    numY = num

    lastNumX = numX
    lastNumY = numY
    el.style.left = numX+"px"
    el.style.top = numY+"px"
    //console.log(`left of el ${el.style.top}`)
    blackies = document.querySelectorAll("#myCanvas")
}    
}


function moveFigures(){
    setInterval(()=>{
        setInterval(checkColision,200)
        num = randomize(50,550)
        if(num<120){
            num += 200
        }
     
        myBall.style.left = num+"px"
        num = randomize(50,550)
        if(num<120){
            num += 200
        }
     
        myBall.style.top = num+"px"
        for(let i:number = 0;i<blackies.length; i++){

            num = randomize(50,550)
           
            if(num<120){
                num += 200
            }
           
            numX = num
            num = randomize(50,550)
         
            if(num<120){
                num+=200
            }
            numY = num

            //if (Math.abs(numX - lastNumX)<200){
            //    numX = lastNumX + 200
            //}
            //if (Math.abs(numY - lastNumY)<200){
            //    numY = lastNumY + 200
            //}
            
            blackies[i].style.left = numX+"px"
            blackies[i].style.top = numY+"px"
            blackies.forEach(elem=>{
                elem.onmouseover = blackiTouch
                window.onclick = blackiMore
             
            })
            //lastNumX = numX
            //lastNumY = numY
            
    }
},2000) 

}

function blackiTouch(ev){
    ev.target.style.opacity="0"
    //moveFigures()
    
}

function blackiMore(ev){
    const el = drawWizard();
    document.getElementById('container').appendChild(el);
    el.id = "myCanvas"
    el.style.transition = "all 2000ms"
    el.style.position = 'absolute';
    el.style.left = "200px"
    el.style.width = "200px"
    el.style.height = "120px"
    el.style.width = "120px"
    blackies = document.querySelectorAll("#myCanvas")
    //moveFigures()
}


  //Initialization:
addBall()
addBlackies()
moveFigures()





//checkColision()

