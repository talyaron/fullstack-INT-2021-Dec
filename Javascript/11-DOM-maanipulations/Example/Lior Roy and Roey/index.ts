const boxes = document.querySelectorAll('.box')

console.dir(boxes)

console.log(boxes[0].id)

function refresh() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = boxes[i].id
        //boxes[i].style.backgroundColor = getRandomColorHex()
        boxes[i].style.backgroundColor = getRandomColorRgb()
    }
}

setInterval(refresh, 2000)

function getRandomColorHex() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColorRgb() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    if (red >= 200 && green >= 200 && blue >= 200) {
        boxes.style.color = 'black'
    }
    return `rgb(${red}, ${green}, ${blue})`
}


