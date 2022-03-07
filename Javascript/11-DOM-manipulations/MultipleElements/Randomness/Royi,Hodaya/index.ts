const box:any = document.querySelectorAll('.box');

function getRandomPotion() {
    // let finalDivPositionTop = box.top + Math.floor( Math.random() * 100 );
    // let x = `1,2,3,4,5`
    let color =0
    let finalDivPositionLeft = + Math.floor( Math.random() * 100 );
     for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16);
      }
      return color
}
    box.forEach(element=>{
        // element.style.top ="Math.floor( Math.random() * 100 )px"

        element.style.left =Math.floor( Math.random() * 100)

})       



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }
  box.forEach(element=>{
    element.style.backgroundColor = getRandomColor()
})
console.dir(box)