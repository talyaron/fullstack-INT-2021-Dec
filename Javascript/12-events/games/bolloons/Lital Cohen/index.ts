

const balloons: NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
console.dir(balloons)




// function to move all of the balloons up//
moveBalloonsUp(balloons)
function moveBalloonsUp(balloons: NodeListOf<HTMLImageElement>) {
    balloons.forEach(balloon => {
        moveOneBalloonUp(balloon)
        const aBalloon: HTMLImageElement = document.querySelector('balloonId');

    })
}

//function to create a new balloon//
function createNewBalloon() {
    const balloonId = uid();
    document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="./dist/Tux_Paint_balloon (1).svg"/>`
    const balloon: HTMLImageElement = document.querySelector(`#${balloonId}`);
    console.log(`it is a new balloon ${balloonId}`)

    moveOneBalloonUp(balloon);
}

function uid() {
    return `id-${Math.ceil(Math.random() * 1e8)}`
}




//function to move each one of the balloons up in a radom position every 5s//
function moveOneBalloonUp(balloon: HTMLImageElement) {
    balloon.style.top = '112vh'
    balloon.style.left = `${Math.random() * 90}vw`

    setTimeout(() => {
        balloon.style.top = '-20vh';

    }, 500)

}



// function to make the balloon go up within random time------//

(function loop() {
    let rand = Math.round(Math.random() * 10);
    setTimeout(function () {
        createNewBalloon();
        console.log("Delayed " + rand + " secs.");
        loop();
    }, rand * 1000);
}());



//function to play a sound when a balloon is blowed up 
function play_single_sound() {
    let audioPlayer: any = document.getElementById('audiotag1');
    audioPlayer.play()
}

//make the balloon pop when clicked

function handleMakeSound(event: any) {
    console.dir(event)



}

