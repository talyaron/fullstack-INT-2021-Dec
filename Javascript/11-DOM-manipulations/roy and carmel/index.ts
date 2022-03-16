const astroidArray:NodeList<HTMLElement>=document.querySelectorAll(`.astroid`)

function randomPlace(){
    let y=(Math.floor((Math.random())*80))
    return y
}



function checkForCrash(astArray:Array<any>){
    for(let i=0; i<astArray.length; i++){
        let thisx=astArray[i].style.left
        let numthisx:number=thisx.replace('vw','')
        let thisy=astArray[i].style.top
        let numthisy:number=thisy.replace('vh','')
        
        for(let j=i+1; j<astArray.length; j++){
            let otherx=astArray[j].style.left
            let numotherx:number=otherx.replace('vw','')
            let othery=astArray[j].style.top
            let numothery:number=othery.replace('vh','')
            let difx=Math.abs(numthisx-numotherx) 
            let dify=Math.abs(numthisy-numothery)
            
            console.log(difx, dify)
            if(difx<=10&&dify<=10){
                console.log(difx, dify)
                console.log("oh no! youre dead X")
                // astArray[i].style.display=`none`
                // astArray[j].style.display=`none`
            }
        }
    }
}
function checkBetter(astArray:Array<any>){

}

function chaos(){
    for (let i=0; i<astroidArray.length; i++){
        astroidArray[i].style.top=randomPlace()+ `vh`
        astroidArray[i].style.left=randomPlace()+`vw`
    }
    checkForCrash(astroidArray)
}


setInterval(chaos, 5000)
