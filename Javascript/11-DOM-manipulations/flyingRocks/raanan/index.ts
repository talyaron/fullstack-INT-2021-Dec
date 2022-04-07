let positions = {}

window.onload = () => {
    setInterval(() => {
        moveAstroid('astroid1')
        moveAstroid('astroid2')
        moveAstroid('astroid3')
        moveAstroid('astroid4')
        moveAstroid('astroid5')

        console.log(positions);
    }, 1000)
}


function moveAstroid(id: string) {
    let astroid = document.getElementById(id);
    let x:number= getRandomNumber(1, 100);
    let y:number= getRandomNumber(1, 100);
    positions[id+"x"] = x;
    positions[id+"y"] = y;
    astroid.style.top = `${x}vh`;
    astroid.style.left = `${y}vw`;
}


function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}