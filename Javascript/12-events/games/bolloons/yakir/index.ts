const baloons: NodeListOf<HTMLElement> = document.querySelectorAll(".baloon");

function randomPosition() {
    let postion: number;
    postion = Math.random() * 90;
    return postion;
}


baloonRandom()

window.requestAnimationFrame(baloonRandom)
var intervalID = setInterval(baloonRandom, 5000);

function baloonRandom() {
    baloons.forEach((element) => {
        //random position
        element.style.top = randomPosition() + "vh";
        element.style.left = randomPosition() + "vw";
    });
}

