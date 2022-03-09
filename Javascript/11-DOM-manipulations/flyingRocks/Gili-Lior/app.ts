console.log(`hi`)

const metor: any = document.querySelectorAll('.metor')
console.dir(metor)

function getRandomNumber(num): number {
    const num1 = Math.floor(Math.random() * num)
    console.log(num1)
    return num1
}

function moveMetor() {
    metor.forEach(element => {
        element.style.top = getRandomNumber(85)+`vh`
        element.style.left = getRandomNumber(85)+`vh`
    });

}

function setRandomRotation() {
    metor.forEach(element => {
        element.style.transform = `rotate(${getRandomNumber(360)}deg)`
    });
}

setRandomRotation()

setInterval(moveMetor, 5000)

