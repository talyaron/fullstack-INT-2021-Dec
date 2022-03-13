const aBox: HTMLDivElement = document.querySelector("#aBox");


aBox.onclick = handleClick

aBox.addEventListener('click', handleClick)

function handleClick(ev){

  

    ev.target.style.backgroundColor = getRandomColor();
    ev.target.innerHTML = `<div>(${ev.x}, ${ev.y})</div>`
}

aBox.onmouseleave = handleClick

console.dir(aBox)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }