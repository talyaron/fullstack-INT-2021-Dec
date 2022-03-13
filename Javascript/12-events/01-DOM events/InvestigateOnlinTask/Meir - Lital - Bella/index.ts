// const aBox: HTMLDivElement = document.querySelector("#aBox");
// // document.onload = handleClick;
// const body: HTMLBodyElement = document.querySelector("body");

// document.onscroll = handleClick;
// let counter = 0;

// function handleClick(ev) {
//   console.log(counter);
//   counter++
//   ev.stopPropagation();
//   const element = ev.target;

//  element.style.backgroundColor = getRandomColor();
//   // body.innerHTML += `${ev.x}, ${ev.y}`;
// }

// console.dir(aBox);

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

const container: HTMLDivElement = document.querySelector("#container");
container.onmouseover = container.onmouseout = handler;

function handler(event) {

  if (event.type == 'mouseover') {
    event.target.style.background = 'pink'
  }
  if (event.type == 'mouseout') {
    event.target.style.background = ''
  }
}
