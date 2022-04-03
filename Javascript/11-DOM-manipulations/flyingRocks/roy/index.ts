const astroidArray:NodeList<HTMLElement>=document.querySelectorAll(`.astroid`)

function randomPlace(){
    let y=(Math.floor((Math.random())*80))
    return y
}

function checkForCrash(astArray:Array<any>){
    for(let i=0; i<astArray.length; i++){
        let thisx=astArray[i].style.left
        let thisy=astArray[i].style.top
        for(let j=i+1; j<astArray.length; j++){
            let otherx=astArray[j].style.left
            let othery=astArray[j].style.top
            let difx=Math.abs(thisx-otherx) 
            let dify=Math.abs(thisy-othery)
            if(difx<=60||dify<=40){
                alert("oh no! youre dead X")
                 astArray[i].style.display=`none`
                 astArray[j].style.display=`none`
            }
        }
    }
}

function chaos(){
    for (let i=0; i<astroidArray.length; i++){
        astroidArray[i].style.top=randomPlace()+ `vh`
        astroidArray[i].style.left=randomPlace()+`vw`
    }
    checkForCrash(astroidArray)
}


setInterval(chaos, 5000)

window.addEventListener(`load`, checkForCrash)