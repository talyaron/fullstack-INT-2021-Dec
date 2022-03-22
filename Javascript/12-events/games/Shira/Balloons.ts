const balloons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
balloonsGoUp(balloons)

function balloonsGoUp(balloons: NodeListOf<HTMLImageElement>) {
    balloons.forEach(balloon => {
        balloonUp(balloon);
    })
}


function balloonUp(balloon: HTMLImageElement) {


    balloon.style.top = '112vh';
    balloon.style.left = `${Math.random() * 90}vw`
    setInterval(() => {
        balloon.style.top = '0vh';

    }, 1000)
}