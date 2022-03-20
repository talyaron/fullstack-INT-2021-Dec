const ballon1:HTMLElement= document.querySelector (".balon1")
const ballon2:HTMLElement= document.querySelector (".balon2")
const ballon3:HTMLElement= document.querySelector (".balon3")

let ballonArray:Array<any>= [ballon1,ballon2,ballon3]

function amazingBallons(){
    ballonArray.forEach(element => {
        element.style.top= -30+"vh"
        element.style.left= getRandomPosition
    });
}

setInterval (amazingBallons)

function getRandomPosition() {
    let randonsize = Math.floor(Math.random() * 100);
    return randonsize;
}