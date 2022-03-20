
// const getRandom = (min:number, max:number) => Math.floor(Math.random()*(max-min+1)+min);

// const balloons:any = document.querySelectorAll('.baloonns');

const container = document.querySelector ('.container');

for (i=1; i<=4; i++) {

const balloons = document.createElement ('img');
balloons.src = "./balloons.png"
balloons.width = 200;

container.appendChild (balloons);
}  

function moveBalloons() {
    balloons.forEach(element => {
        element.style.top = `-12vh`;
        element.style.left = `${getRandom()}vw`;
    });
}

function getRandom() {
    let random = Math.floor(Math.random() * 100);
    return random;
}

moveBalloons()
// setInterval(moveBalloons, 1000);