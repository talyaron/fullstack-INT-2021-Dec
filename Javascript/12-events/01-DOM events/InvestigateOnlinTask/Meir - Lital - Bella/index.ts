const aBox: HTMLDivElement = document.querySelector("#aBox");
// document.onload = handleClick;

document.onscroll = handleClick;

function handleClick(ev) {
  if (){
    
  }
  console.log(ev);
  ev.stopPropagation();
  const element = ev.target;

  element.style.backgroundColor = getRandomColor();
  element.innerHTML += `${ev.x}, ${ev.y}`;
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
