const body:HTMLBodyElement = document.querySelector('body')
let killCount:number = 0
let balloonCount:number = 0

function randomNum(){
    return Math.floor((Math.random() * 100)+ 1)
}

function createBalloon(){
    const newballoon = document.createElement('img')
    balloonCount++
    newballoon.classList.add('balloon')
    newballoon.src = "AJ_balloon.svg"
    newballoon.style.left = (`${randomNum()}vw`)
    newballoon.style.transition = 'all 10s'
    newballoon.addEventListener('click', (ev) => 
        {
            killCount++
            ev.target.src = "explode.svg"
            ev.target.style.transition = "all 2s"
            ev.target.style.width = "70px"
            console.log('step one')
            setTimeout(() => {
                ev.target.style.display = "none"
                console.log('step two')
            }, 2000);
        }
    )
    body.appendChild(newballoon)
    setTimeout(() => {
        newballoon.style.top = '-15vh'
    }, 100);
}


function randomTime() {
    let time = Math.round(Math.random() * (3000 - 500)) + 500; // generate new time (between 3sec and 500"s)
    setTimeout(createBalloon, time);
}

setInterval (createBalloon, 5000)

setInterval (randomTime, 1000)

setTimeout ((a) => {
    let resultDisplay = document.createElement('div')
    resultDisplay.classList.add('resultDisplay')
    resultDisplay.innerText = `Your Results are: ${killCount} out of ${balloonCount} Balloons Popped in 30 Seconds`
    body.appendChild(resultDisplay)

}, 10000)