const baloons: NodeListOf<HTMLElement> = document.querySelectorAll(".baloon");



window.requestAnimationFrame(baloonRandom)
var intervalID = setInterval(baloonRandom, 5000);

function baloonsUp() {
    baloons.forEach((element) => {
        element.style.top = 0 + "vh";
    });
}

baloonsUp()


