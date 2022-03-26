const balloons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.redBalloon')
console.dir(balloons)

//making the balloons go up//
moveBalloonsUp(balloons)
function moveBalloonsUp(balloons: NodeListOf<HTMLImageElement>) {
    balloons.forEach(redBalloon =>{
    moveBalloonOnly(redBalloon)
    }
    )
}


function moveBalloonOnly(redBalloon: HTMLImageElement){
    redBalloon.style.top = '112vh'
    redBalloon.style.left = `${Math.random()*90}vw`
 
    setInterval(()=> {
        redBalloon.style.top ='-20vh'

    },500)
}
//Create a function for a new balloon//
function createNewBalloon(){
const balloonId = newId();
document.body.innerHTML +=`<img id='${balloonId}' class='redBalloon'src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Red_Balloon_%28Vector%29.svg"/>`
const redBalloon:HTMLImageElement =document.querySelector(`#${balloonId}`)
console.log(`The ID: ${balloonId}`)

moveBalloonOnly(redBalloon)
}

//setInterval(createNewBalloon, 6000)


//Create random id number for each balloon/

function newId(){
    return `id-${Math.ceil(Math.random()*1e8)}`

}

//Create a function for a flying balloon at a random time//
(function loop() {
    let rand = Math.round(Math.random() * 10);
    setTimeout(function () {
        createNewBalloon();
        console.log("Create after " + rand + " seconds");
        loop();
    }, rand * 1000);
}());

//When you press the balloon, the balloon explodes//
function baloonExplodes(){

}
