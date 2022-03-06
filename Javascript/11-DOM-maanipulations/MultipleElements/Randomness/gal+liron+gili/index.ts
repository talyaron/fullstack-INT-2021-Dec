const boxs:any = document.querySelectorAll('.box');

console.dir(boxs)
boxs[0].style.backgroundColor = 'yellow';
boxs.forEach(element=>{
    element.style.backgroundColor = getRandomColor()
})

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
  }

  boxs.forEach(element=>{
    element.style.backgroundColor = getRandomColor()
})

function listRandomboxs(boxs){
    let radomLength = Math.floor(Math.random()*boxs.length)
    let randomArray = []
    for(var i=0; i<=radomLength; i++ ){
        var randomIndex = Math.floor(Math.random()*boxs.length)
        randomArray.push(boxs[randomIndex])
        boxs.splice(randomIndex, 1)
    }
    console.log(randomArray)
}

