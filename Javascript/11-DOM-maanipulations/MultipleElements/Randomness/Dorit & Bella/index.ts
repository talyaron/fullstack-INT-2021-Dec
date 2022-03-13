const boxs:any = document.querySelectorAll('.box');

console.dir(boxs)
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(element=>{
    element.style.backgroundColor = getRandomColor(),
    //element.style.offsetHeight = getRandomPosition(element),
    //element.style.offsetWidth = getRandomPosition(element)
})


//create random postions on the screen
//create random sizes
//* change it every 1 second (and use transfer )css
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }

  function getRandomPosition(element) {
    let x = document.body.offsetHeight-element.clientHeight;
    let y = document.body.offsetWidth-element.clientWidth;
    let randomX = Math.floor(Math.random()*x);
    let randomY = Math.floor(Math.random()*y);
    return [randomX,randomY];
  }
  console.dir (boxs)
  