const boxs:any = document.querySelectorAll('.box');

console.dir(boxs)
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(element=>{
    element.style.backgroundColor = getRandomColor()
    element.style.left = listRandomboxs() + "px"
    element.style.width = listRandomboxs()/10 + "px"
    element.style.height = listRandomboxs()/10 + "px"
})

setInterval (repeat, 3000)

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }


  function listRandomboxs(){
    let getRandomPostion:number;
    getRandomPostion= Math.random()*500
    return getRandomPostion  
  }

  window.setTimeout( function() 
  {
    window.location.reload();
  }, 3000);
  
  

function repeat(repeat: any, arg1: number) {
  throw new Error("Function not implemented.");
}
//create random postions on the screen
//create random sizes
//* change it every 1 second (and use transfer )css

