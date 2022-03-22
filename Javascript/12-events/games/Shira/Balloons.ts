const balloons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
const body:HTMLBodyElement = document.querySelector('body');

// body.style.backgroundImage = 'url(./images/sky.jpg)'

balloons.forEach(balloon=>{
   createBalloon(balloon)
})

function createBalloon(balloon){
    const newBalloon = document.createElement('div')
    body.append(newBalloon)
    newBalloon.classList.add('balloon')
    const balloonImg = document.createElement('img')
    newBalloon.append(balloonImg)
    balloonImg.src = "images/blueBalloon.png"
    balloonUp(newBalloon)
}


function balloonUp(newBalloon){
    setInterval(()=>{
        newBalloon.style.top = '-25vh';
    },2000)
}


// function balloonFirstPosition()

