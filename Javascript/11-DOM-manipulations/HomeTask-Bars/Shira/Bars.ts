const myBars:any = document.querySelectorAll('.column');
const myWrapper:HTMLDivElement = document.querySelector('.wrapper');
const numbersArr:Array<number> = [10,26,50,14,70,84,6];
const myText = document.querySelector('.text');

// numbersArr.forEach(element=>{
//     let barElm = element;
//     element.style
  
// })
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}

for(let i=0; i<numbersArr.length; i++){
    myBars[i].style.width = '80px';
    myBars[i].style.height = `${numbersArr[i]*5}px`;
    myBars[i].style.backgroundColor = getRandomColor()
    myText.innerHTML = `${numbersArr[i]}`;
    // myBars[i].innerHTML= `${numbersArr[i]}`;
   

}
console.dir(myBars)





