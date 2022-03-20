
// const getRandom = (min:number, max:number) => Math.floor(Math.random()*(max-min+1)+min);

const balloons: any = document.querySelectorAll('.baloonns');
console.dir(balloons)

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

// setInterval(moveBalloons, 1000);
moveBalloons()