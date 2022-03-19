const aBox: HTMLDivElement = document.querySelector("#aBox");
const boxes:any= document.querySelectorAll('.box');

boxes.forEach((box:any)=>{
  box.onmousemove = handleColors;
})
document.onload = handleClick;

aBox.onclick = handleClick;
document.onfullscreenchange = handleClick

function handleClick(ev) {
  console.log(ev);
  ev.stopPropagation();
  const element = ev.target;

  element.style.backgroundColor = getRandomColor();
  element.style.backgroundColor = getRandomColor(); element.innerHTML += `<div>(${ev.x}, ${ev.y})</div>`;
}

function handleColors(ev){
  ev.target.style.backgroundColor = getRandomColor();
}

console.dir(aBox);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
