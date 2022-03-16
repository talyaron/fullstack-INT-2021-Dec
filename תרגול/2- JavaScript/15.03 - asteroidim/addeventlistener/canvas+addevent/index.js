const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');
const color = document.querySelector('input')
let userColor = ''

color.addEventListener('change', (e) => {
    // e.style.color
    userColor = e.target.value
    console.dir(e.target.value)
})

let x = 0;
let y = 0;
let isDrawing = false;

myPics.addEventListener('mousedown', (e) => {
    console.log(e)

    x = e.offsetX
    y = e.offsetY

    isDrawing = true;
})

myPics.addEventListener('mousemove', (e) => {
    if (isDrawing == true) {
        drawLine(context, x, y, e.offsetX, e.offsetY)
        x = e.offsetX
        y = e.offsetY
    }
})

myPics.addEventListener('mouseup', (e) => {
    if (isDrawing == true) {
        isDrawing = false
    }
})

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath(); //מתחיל דרך חדשה
    context.strokeStyle = `${userColor}`; //צבע של המרקר
    context.lineWidth = 1; //עובי של המרקר
    context.moveTo(x1, y1); //שם את ההקודה בפרמנטרים שניתנו
    context.lineTo(x2, y2); //מעביר קו לנקודה שצויינה
    context.stroke(); //מצייר את המעבר/מראה
    context.closePath(); //סוגר את הדרך
}