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
 setInterval(createNewPosition,2000)
  createNewPosition()
// const elm2p ={leftPosition:meteaor.getBoundingClientRect().x}
// console.log(elm2p)
for (let i = 0; i < meteaor.length ; i++){
const elm1p = {
    leftPosition:meteaor[0].getBoundingClientRect().x,
    rightPosition:meteaor[0].getBoundingClientRect().right,
    topPosition:meteaor[0].getBoundingClientRect().y,
    bottomPosition:meteaor[0].getBoundingClientRect().bottom 
    }
 
    const elm2p = {
        leftPosition:meteaor[1].getBoundingClientRect().x,
        rightPosition:meteaor[1].getBoundingClientRect().right,
        topPosition:meteaor[1].getBoundingClientRect().y,
        bottomPosition:meteaor[1].getBoundingClientRect().bottom 
     }



    if( 
        elm2p.topPosition > elm1p.topPosition && 
        elm1p.leftPosition > elm2p.leftPosition && 
        elm1p.leftPosition <elm2p.rightPosition &&
        elm1p.topPosition > elm2p.topPosition ||
        elm2p.topPosition <elm1p.bottomPosition &&
        
        elm2p.leftPosition > elm1p.leftPosition && 
        elm2p.leftPosition <elm1p.rightPosition&&
        elm1p.topPosition <elm2p.bottomPosition )

    
            
        
        {console.log('Overlap')}
        else{
        console.log('no Overlap')
    }
}



