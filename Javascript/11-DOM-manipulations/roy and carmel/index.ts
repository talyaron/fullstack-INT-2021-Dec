const astroidArray:NodeList<HTMLElement>=document.querySelectorAll(`.astroid`)

function randomPlace(){
    let y=(Math.floor((Math.random())*90))
    return y
}

const exploded:HTMLElement=document.querySelector(`.explode`)

const aswid=astroidArray[0].style.width
const ashei=astroidArray[0].style.height

function goneONclick(ev){
    // ev.target.style.display='none'
    let explod=ev.target
    console.dir(explod)
    explod.src="explode.png"
    setTimeout(()=>{ev.target.style.display='none'}, 2000)
}

for(let i=0; i<astroidArray.length; i++){
    astroidArray[i].onclick= goneONclick
}



function checkForCrash(astArray:Array<any>, xwidth:number, xheight:number){
    const crashedORnot=["no"]
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
            crashedORnot.push("no")
            if (i==j)
            {
                break
            }
            
            console.log(crashedORnot[j])
            if((difx<=xwidth&&dify<=xheight)&&(crashedORnot[j]=="no")){
                console.log(difx, dify)
                console.log(crashedORnot[j])
                astArray[j].style.display='none'
                exploded.style.display=`inline`
                exploded.style.left=otherx
                exploded.style.top=othery
                crashedORnot[j]="yes"
            }
        }
    }
}
function checkBetter(astArray:Array<any>){

}

function chaos(){
    checkForCrash(astroidArray, aswid, ashei)
    for (let i=0; i<astroidArray.length; i++){
        astroidArray[i].style.top=randomPlace()+ `vh`
        astroidArray[i].style.left=randomPlace()+`vw`
    }
    
}


setInterval(chaos, 5000)
