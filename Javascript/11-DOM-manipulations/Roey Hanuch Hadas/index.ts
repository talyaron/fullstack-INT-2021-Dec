
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
    });
}


setInterval(moveImages, 4500)


moveImages()


