const astroidArray:NodeList<HTMLElement>=document.querySelectorAll(`.astroid`)

function randomPlace(){
    let y=(Math.floor((Math.random())*90))
    return y
}

const exploded:HTMLElement=document.querySelector(`.explode`)

const aswid=astroidArray[0].style.width
const ashei=astroidArray[0].style.height

function goneONclick(ev){
    ev.target.style.display='none'
    // exploded.style=`display: inline; left:${ev.x}; top:${ev.y}`

}
for(let i=0; i<astroidArray.length; i++){
    astroidArray[i].onclick= goneONclick;
}
