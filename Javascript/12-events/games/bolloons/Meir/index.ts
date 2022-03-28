const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll(".ballon");
const body: HTMLBodyElement = document.querySelector('body');




///////Function create balloon:
function createBalloons(): any {
    const balloons = document.createElement('div')
    body.append(balloons)
    balloons.classList.add('ballon')
    const balloonImg = document.createElement('img')
    balloons.append(balloonImg)
    balloonImg.src="balloons.png"
    balloons.addEventListener('click',handleClick)
    return balloons
}

///////////Function move objects
function flyBallon(Balloon, interval: number) {
    Balloon.element.style.left = getRandomPosition() + 'vw';
    setInterval(() => {
        Balloon.style.top = '-15vh';
    }, interval)    
}

/////Function ramdomly position of objects
function getRandomPosition(): number {
    let random = Math.floor(Math.random()*50);
    return random
}

/////Function ramdomly interval of objects
function getRandomInterval(): number {
    let random = Math.floor(Math.random() * 10000);
    console.log(`${random / 1000}s`)
    return random
}

////Function that explote balloon and explonding sound
function handleClick(ev: any): void {
    ev as HTMLElement;
    let audio = new Audio(`poomballon.wav`,);
    audio.play();
    ev.target.src='bombPicture.png'
}

////Start game Function
function startGame(): void {
    ballons.forEach(balloon => {
        flyBallon(createBalloons(), 5000)
    })
    flyBallon(createBalloons(), getRandomInterval())    
}

setInterval(startGame, 2000)
 




