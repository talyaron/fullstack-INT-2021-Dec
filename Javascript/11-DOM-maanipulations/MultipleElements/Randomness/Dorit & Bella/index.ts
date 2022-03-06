const boxs:any = document.querySelectorAll('.box');

console.dir(boxs)
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(element=>{
    element.style.backgroundColor = getRandomColor()
    let x = getRandomPosition()
    let y = getRandomPosition()
    let height = getRandomPosition()
    let width = getRandomPosition()
    element.style.marginTop = y + "px"
    element.style.marginLeft = x + "px"
    element.style.height = height + "px"
    element.style.width = width + "px"
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

  function getRandomPosition() {
    let x = Math.round(Math.random()*200)
    return x;
  }
  



  