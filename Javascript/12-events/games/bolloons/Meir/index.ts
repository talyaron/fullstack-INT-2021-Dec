const ballons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.ballon');
const body: HTMLBodyElement = document.querySelector('body');

///////Function create balloon:
function createBalloon(): any {
    const myBalloons = document.createElement('div')
    body.append(myBalloons)
    myBalloons.classList.add('ballon')
    const balloonImg = document.createElement('img')
    myBalloons.append(balloonImg)
    balloonImg.src="balloons.png"
    myBalloons.addEventListener('click',handleClick)
    return myBalloons
}

///////////Function move objects
function flyBallon(Balloon, interval: number) {
    Balloon.element.style.left= getRandomPosition() + 'vw';
    setInterval(() => {
        Balloon.style.top = '-90vh';
    }, interval)    
}

/////Function ramdomly position of objects
function getRandomPosition(): number {
    let random = Math.floor(Math.random() * 90);
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
    ballons.forEach(ballon => {
        flyBallon(createBalloon(), 2000)
    })
    flyBallon(createBalloon(), getRandomInterval())    
}

setInterval(startGame, 1000)
 




