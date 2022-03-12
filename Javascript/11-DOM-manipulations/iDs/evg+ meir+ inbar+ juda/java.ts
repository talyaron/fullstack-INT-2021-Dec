const meteaor:any = document.querySelectorAll(".boom-boi")
//  window.addEventListener("keydown", move)
// console.dir(meteaor)

function createNewPosition(){
    meteaor.forEach(a => {
        
        a.style.top = `${getRandomNumber()}vh`
        a.style.left = `${getRandomNumber()}vw`
    
    });
}
function getRandomNumber (){
    const random = Math.floor(Math.random() * 90);
    return random
}
setInterval(createNewPosition,1000)
  
  
