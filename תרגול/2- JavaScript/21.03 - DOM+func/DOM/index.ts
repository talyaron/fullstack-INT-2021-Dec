const item: HTMLDivElement = document.querySelector('.item')

function hendleUp() {
    // console.log("u")
    item.style.top = '5vh';
}

function hendleDown() {
    // console.log("d")
    item.style.bottom = '0px';
}
function hendleLeft() {
    // console.log("l")
    item.style.left = '0px';
}
function hendleRight() {
    // console.log("r")
    item.style.right = '1px';
}

const btns: NodeList = document.querySelectorAll('button')
console.log(btns)

btns[0].addEventListener('click', hendleUp)

const body = document.querySelector('body')

// body.addEventListener('keyup', (e) => {
//     console.log(e.code)

//     if (e.code == "ArrowUp") {
//         hendleUp()
//     } else if (e.code == "ArrowDown") {
//         console.log('down')
//         hendleDown()
//     } else if (e.code == "ArrowRight") {
//         console.log('right')
//         hendleRight()
//     } else if (e.code == "ArrowLeft") {
//         console.log('left')
//         hendleLeft()
//     }
// })


body.addEventListener('keyup', (e) => {
    console.log(e.code)

    switch (e.code) {
        case "ArrowUp":
            hendleUp()
            break;
        case "ArrowDown":
            hendleDown()
            break;
        case "ArrowRight":
            console.log('right')
            hendleRight()
            break;
        case "ArrowLeft":
            console.log('left')
            hendleLeft()
            break;
        default:
            console.log('defualt')
    }
})

//על כל לחיצה של מספרים 1-3, תכתבו טקסט חדש בדיב