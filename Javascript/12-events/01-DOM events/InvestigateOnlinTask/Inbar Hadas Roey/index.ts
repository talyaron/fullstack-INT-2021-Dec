const box: HTMLDivElement = document.querySelector("#box")

let divScore: HTMLDivElement = document.querySelector("#score")

box.onclick = handleClick;

let score = 0

function handleClick(ev) {
    let element = ev.target
    element.innerHTML = `<div id = "divScore">${++score}</div>`
    console.log(ev)
    console.log(score)
}

const changeColor: HTMLDivElement = document.querySelector(".itemOne")
const changeSize: HTMLDivElement = document.querySelector(".itemTwo")
const rotate: HTMLDivElement = document.querySelector(".itemThree")
const powerUp: HTMLDivElement = document.querySelector(".itemFour")


changeColor.onclick = handleColor;

function handleColor(ev) {
    if (score >= 5) {
        box.style.backgroundColor = getRandomColor();
        score = score - 5;
        box.innerHTML = `<div id = "divScore">${score}</div>`
        console.log(score)
    }
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }




