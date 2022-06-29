const images: NodeListOf<any> = document.querySelectorAll(".meteorImg")

console.log(images)


function randomMovement() {
    const random = Math.round(Math.random() * 90)
    return random
}

function moveImages() {
    images.forEach(element => {
        element.style.left = randomMovement() + "vw"
        element.style.top = randomMovement() + "vh"
        console.log(element.style.left)
        console.log(element.style.top)
    });
}

window.requestAnimationFrame(moveImages);




setInterval(moveImages, 4500)

console.log(randomMovement())

moveImages()

images.forEach(elm =>{
    elm.onmousedown = disappear;
    elm.onmouseup = undisappear;
})

function disappear(click){
    click.target.style.opacity = "0"
}

function undisappear(click){
    click.target.style.opacity = "100"
}