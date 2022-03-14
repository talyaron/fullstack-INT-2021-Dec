//--// please refresh the page until the overlap and you see the BOOM in the cosole

//---I have 6 rocks flying and when they ovelappping 
//  a 'BOOM' statement is being logged into the cosole.
//  it is only working when the page is being refreshed 
// i couldn't do it as they were in the move


const boxs: any = document.querySelectorAll('.box');

boxs.forEach(element => {
    element.style.left = getRandomPosition()
    element.style.top = getRandomPosition()
    element.style.right = getRandomPosition()
    element.style.transform = "rotate(360deg)";
    element.onclick  = handleEvent
    element.onmouseleave = handleEventLeave
    element.onclick = explodeEvent
   element.ondblclick=playBoomSound

})

let counter = 360;

function getRandomMove() {

    boxs.forEach(element => {

        element.style.left = getRandomPosition()
        element.style.top = getRandomPosition()
        element.style.right = getRandomPosition()
        element.style.transform = `rotate(${counter}deg)`;
        counter += 360;


    })
}

let moveInterval;


function getRandomNumber() {

    let boxsize = (((Math.random() * 100) + 60).toFixed()) + 'px';

    return boxsize;
}

function getRandomPosition() {

    let boxsize = (((Math.random() * 800) + 60).toFixed()) + 'px';

    return boxsize;
}



const rock1 = document.querySelector('.rock1')
const rock2 = document.querySelector('.rock2')
const rock3 = document.querySelector('.rock3')
const rock4 = document.querySelector('.rock4')
const rock5 = document.querySelector('.rock5')
const rock6 = document.querySelector('.rock6')



const rock1Position = {
    xPosition: rock1.getBoundingClientRect().x,
    bPosition: rock1.getBoundingClientRect().bottom,
    rPosition: rock1.getBoundingClientRect().right,
    yPosition: rock1.getBoundingClientRect().top
}
console.log(rock1Position)
const rock2Position = {
    xPosition: rock2.getBoundingClientRect().x,
    rPosition: rock2.getBoundingClientRect().right,
    bPosition: rock2.getBoundingClientRect().bottom,
    yPosition: rock2.getBoundingClientRect().top
}
console.log(rock2Position)
const rock3Position = {
    xPosition: rock3.getBoundingClientRect().x,
    rPosition: rock3.getBoundingClientRect().right,
    bPosition: rock3.getBoundingClientRect().bottom,
    yPosition: rock3.getBoundingClientRect().top
}
console.log(rock3Position)
const rock4Position = {
    xPosition: rock4.getBoundingClientRect().x,
    rPosition: rock4.getBoundingClientRect().right,
    bPosition: rock4.getBoundingClientRect().bottom,
    yPosition: rock4.getBoundingClientRect().top
}
console.log(rock4Position)
const rock5Position = {
    xPosition: rock5.getBoundingClientRect().x,
    rPosition: rock5.getBoundingClientRect().right,
    bPosition: rock5.getBoundingClientRect().bottom,
    yPosition: rock5.getBoundingClientRect().top
}
console.log(rock5Position)
const rock6Position = {
    xPosition: rock6.getBoundingClientRect().x,
    rPosition: rock6.getBoundingClientRect().right,
    bPosition: rock6.getBoundingClientRect().bottom,
    yPosition: rock6.getBoundingClientRect().top
}




let ArrayOfRocksPositions: Array<any> = [rock1Position, rock2Position, rock3Position, rock4Position, rock5Position, rock6Position];


for (let i = 0; i < ArrayOfRocksPositions.length; i++) {
    setInterval(getRandomMove, 2000);
    function move() {
        let moveInterval = setInterval(getRandomMove, 5000);
    }

    if (rock1Position.xPosition > rock2Position.xPosition && rock1Position.xPosition < rock2Position.rPosition) {
        console.log('BOOM')
    }

    else if (rock2Position.xPosition > rock3Position.xPosition && rock2Position.xPosition < rock3Position.rPosition) {
        console.log('BOOM')
    }
    else if (rock3Position.xPosition > rock4Position.xPosition && rock3Position.xPosition < rock4Position.rPosition) {
        console.log('BOOM')
    }
    else if (rock4Position.xPosition > rock5Position.xPosition && rock4Position.xPosition < rock5Position.rPosition) {
        console.log('BOOM')
    }
    else if (rock5Position.xPosition > rock6Position.xPosition && rock5Position.xPosition < rock6Position.rPosition) {
        console.log('BOOM')
    }
}

const explosionPracticle:any = document.querySelector(".particle");
const boomSound:any=document.querySelector(".boomSound")

function playBoomSound(ev){
const boomSound= document.querySelector(".boomSound")
return boomSound
}





function handleEvent(ev) {
    console.dir(ev.target);
    ev.target.style.opacity = "0"
}

function handleEventLeave(ev) {
    console.dir(ev.target);
    ev.target.style.opacity = "1"
}

function explodeEvent(ev){
    if(ev.target.style.opacity = "0"){
        return explosionPracticle.style.opacity="1";

    }
}
// function playBoomSoundEvent(ev){
//     if(explosionPracticle.style.opacity="1"){
//         return playBoomSound

//     }

 









