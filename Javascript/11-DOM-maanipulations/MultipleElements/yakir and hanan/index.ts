const boxs:any = document.querySelectorAll('.box');

console.dir(boxs)
boxs[0].style.postions = 'yellow';
boxs.forEach(element=>{
    element.style.backgroundColor = getRandomColor()
    element.style.top = getRandomPostion()

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



  function getRandomPostion() {
    let postion;
    postion = Math.random()*100
    return postion;
}

