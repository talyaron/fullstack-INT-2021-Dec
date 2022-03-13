const aBox: HTMLDivElement = document.querySelector("#aBox");
// document.onload = handleClick;

document.onscroll = handleClick;
let counter = 0;

function handleClick(ev) {
  console.log(counter);
  counter++
  ev.stopPropagation();
  const element = ev.target;
}

console.dir(aBox);
