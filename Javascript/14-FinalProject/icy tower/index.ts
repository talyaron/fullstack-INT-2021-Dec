const body = document.querySelector('body')
const rapper = document.querySelector('.rapper')
const player:HTMLDivElement = document.querySelector('.player')

function getRandomArbitrary(min, max):number {
    return Math.random() * (max - min) + min;
  }

function createStep(){
    const step = document.createElement('div')
    step.classList.add('step')
    const stepWidth = getRandomArbitrary(10, 45)
    step.style.width = `${stepWidth}vw`
    let leftPlace = getRandomArbitrary(1,100)
    if(leftPlace > 60)
    {
        leftPlace = leftPlace-stepWidth
    }
    if(stepWidth <20){
        const steptwo = document.createElement('div')
        steptwo.classList.add('step') 
        const stepWidthTwo = getRandomArbitrary(10, 20)
        steptwo.style.width = `${stepWidthTwo}vw`
        let leftPlaceTwo = getRandomArbitrary(1,100)
        if(leftPlace > 50)
        {
            leftPlaceTwo = leftPlace - 48
        }
        else{
            leftPlaceTwo = leftPlace + 48
        }
        steptwo.style.left = `${leftPlaceTwo}vw`
        steptwo.style.transition = `all 50s`
        rapper.appendChild(steptwo)
        console.log(steptwo)
        for (let i=0; i<200; i++){
            setTimeout(() => {
                steptwo.style.top = `${i*5}vh`
            }, 2000)
        }
    }
    step.style.left = `${leftPlace}vw`
    step.style.transition = `all 50s`
    rapper.appendChild(step)
    for (let i=0; i<200; i++){
        setTimeout(() => {
            step.style.top = `${i*5}vh`
        }, 2000)
    }
}

function handleClick(ev){
    player.style.left = `${ev.x}px`
    player.style.top = `${ev.y}px`
   
}

rapper.addEventListener("click", handleClick);


setInterval(createStep, 2000)
