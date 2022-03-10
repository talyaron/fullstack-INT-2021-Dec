let astroids:any=document.querySelectorAll(".box")
astroids.forEach(element=>{
    
    element.style.top = getRandomPostion() + "vh"
    element.style.left = getRandomPostion() + "vw"
    
})


//create random postions on the screen
//create random sizes
//* change it every 1 second (and use transfer )css

  function getRandomPostion():number {
    let postion:number;
    postion = Math.random()*90
    return postion;
}
setInterval(() => {
   astroids.forEach(element=>{
        element.style.top = getRandomPostion() + "vh"
        element.style.left = getRandomPostion() + "vw"
    astroids.forEach(element=>{
        
    })    
   }
   )
 }, 1000)









astroids.forEach(element=>{
    element.top = Math.round(Math.random()*900)
    element.left =  Math.round(Math.random()*900)
}
)

