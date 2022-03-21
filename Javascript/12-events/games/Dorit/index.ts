const balloons:NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
console.dir(balloons)

moveBalloons(balloons)

function moveBalloons(balloons:NodeListOf<HTMLImageElement>){
    balloons.forEach(balloon=>{
        moveBalloon(balloon);
    })
}

//create balloon
function createBalloon(){
    setInterval(()=>{
       let body = document.querySelector("body") 
       let leftb = Math.round(Math.random()*90)+"vw"
       let balloonCss = body.innerHTML+=`<div balloon id="balloon" top="112vh" left = ${leftb}  <img src = "img/balloon-blue.png"></div>`
       let balloon = document.querySelector("#balloon")
       moveBalloon(balloon)



    },Math.round(Math.random()*30))
}
// -> move balloon
// in random times....


function moveBalloon(balloon:HTMLImageElement){
   
    
    balloon.style.top = '112vh';
    balloon.style.left = `${Math.random()*90}vw`
    setInterval(()=>{
        balloon.style.top = '-12vh';
        
    },500)
}

