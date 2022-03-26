const rapper:HTMLDivElement=document.querySelector('.rapper')
rapper.style.backgroundImage= `url("dist/sky.jpg") `


function randomNum(){
    return Math.floor(Math.random() * 100);
}

function createBalloons(){
    for (let i=0; i<9; i++){
       const newBalloon = document.createElement("img")
       newBalloon.classList.add(`balloon`)
       rapper.appendChild(newBalloon)
       newBalloon.src=`balloon.png` 
    }
}

function placeBalloons(){
    for(let i=0; i<balloonArray.length; i++){
        balloonArray[i].style.left=`${randomNum()}vw`
    }
}

function balloonGoUp(){
    for(let i=0; i<balloonArray.length; i++){
        balloonArray[i].style.transition= `all ease-out 10s`;
        balloonArray[i].style.top=`-10vh`
    }
}

// createBalloons()

//placeBalloons()
// balloonGoUp()

function balloonsGame(){
    const newBalloon = document.createElement("img")
    newBalloon.classList.add(`balloon`)
    rapper.appendChild(newBalloon)
    newBalloon.src=`balloon.png`
    newBalloon.style.left=`${randomNum()}vw`
    newBalloon.style.top=`-10vh`      
    newBalloon.style.transition= `all, ease-out, 10s`;
    
}
const balloonArray:NodeListOf<any>=document.querySelectorAll('.balloon')
setInterval(balloonsGame, 2000)
setInterval(balloonGoUp, 3000)