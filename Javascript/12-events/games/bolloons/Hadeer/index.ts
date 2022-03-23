const balloons: any = document.querySelectorAll('.balloon');

function moveBalloons() {
    balloons.forEach(Element => {
        Element.style.top = `112vh`;
        Element.style.left = `Math.floor(Math.random() * 100)+wh`
        setInterval(() => {
            balloons.style.top = '-12vh';

        }, 500)
    }
    )
}

moveBalloons();