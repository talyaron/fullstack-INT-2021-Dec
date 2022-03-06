
const boxes: any = document.querySelectorAll('.box')

function getRandomEverything(){
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = getRandomColor()
    boxes[i].style.top = getRandomTop()
    boxes[i].style.left = getRandomLeft()
}
}
setInterval(getRandomEverything, 1000)
console.dir(boxes)



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function getRandomTop() {
    let top = Math.round(Math.random() * screen.height) + "px"
    return top
}
console.log(getRandomLeft())
console.log(getRandomTop())

function getRandomLeft(){
    let left = Math.round(Math.random() * screen.width) + "px"
    return left
}