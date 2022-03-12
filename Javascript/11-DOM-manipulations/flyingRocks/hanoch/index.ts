function moveMeteor(){
   const random = Math.round(Math.random()*90) 
    return random
}
const meteorImg:NodeListOf<any> = document.querySelectorAll('.meteorImg')

function move(){
meteorImg.forEach(img=>{
    img.style.left = moveMeteor() + 'vw'
    img.style.top = moveMeteor()+ 'vh'
    // const elmPosition1 = {
    //     leftPosition:img.getBoundingClientRect().x,
    //     rightPosition:img.getBoundingClientRect().right,
    //     topPosition:img.getBoundingClientRect().y,
    //     bottomPosition:img.getBoundingClientRect().bottom
    // }
    // const elmPosition2 = {
    //     leftPosition:img.getBoundingClientRect().x,
    //     rightPosition:img.getBoundingClientRect().right,
    //     topPosition:img.getBoundingClientRect().y,
    //     bottomPosition:img.getBoundingClientRect().bottom
    // }
  
    // if(elmPosition1.rightPosition> elmPosition2.leftPosition && elmPosition1.topPosition < elmPosition2.bottomPosition && elmPosition1.leftPosition <elmPosition2.rightPosition){
    //     console.log('boom')
    // }

})
for ( let i = 0; i < meteorImg.length ; i++){
    const elmPosition0 = {
        leftPosition:meteorImg[0].getBoundingClientRect().x,
        rightPosition:meteorImg[0].getBoundingClientRect().right,
        topPosition:meteorImg[0].getBoundingClientRect().y,
        bottomPosition:meteorImg[0].getBoundingClientRect().bottom
    }
    const elmPosition1 = {
        leftPosition:meteorImg[1].getBoundingClientRect().x,
        rightPosition:meteorImg[1].getBoundingClientRect().right,
        topPosition:meteorImg[1].getBoundingClientRect().y,
        bottomPosition:meteorImg[1].getBoundingClientRect().bottom
    }
    const elmPosition2 = {
        leftPosition:meteorImg[2].getBoundingClientRect().x,
        rightPosition:meteorImg[2].getBoundingClientRect().right,
        topPosition:meteorImg[2].getBoundingClientRect().y,
        bottomPosition:meteorImg[2].getBoundingClientRect().bottom
    }
    const elmPosition3 = {
        leftPosition:meteorImg[3].getBoundingClientRect().x,
        rightPosition:meteorImg[3].getBoundingClientRect().right,
        topPosition:meteorImg[3].getBoundingClientRect().y,
        bottomPosition:meteorImg[3].getBoundingClientRect().bottom
    }
    if (elmPosition0.rightPosition[i]> elmPosition1.leftPosition[i] 
         && elmPosition0.leftPosition[i]< elmPosition1.leftPosition[i]){
            console.log('boom')
        }
}

}
setInterval(move, 5000)
move()
