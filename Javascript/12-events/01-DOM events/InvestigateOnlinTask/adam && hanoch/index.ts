
const aBox: HTMLDivElement = document.querySelector("#aBox");
document.onload = handleClick;

aBox.onclick = handleClick;

function handleClick(ev) {
  console.log(ev);
  ev.stopPropagation();
  const element = ev.target;
  element.style.width = getRandomSize();
  element.style.height = getRandomSize();

  element.style.backgroundColor = getRandomColor();
//   element.innerHTML += `<div>(${ev.x}, ${ev.y})</div>`;

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

    function getRandomSize() {
        let randonsize = Math.floor(Math.random() * 500);
        return `${randonsize}px`;
    }
    
