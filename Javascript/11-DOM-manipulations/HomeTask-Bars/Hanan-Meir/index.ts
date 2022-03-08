const numberArray: Array<number> = [25, 55, 30];
const warp: HTMLDivElement = document.querySelector(`.wrapper`);
const sti: any = document.querySelectorAll(`.stick`);


console.dir(sti)

console.log(sti[0].id)

for (let i = 0; i < numberArray.length; i++) {
    let bar = sti[i];
    bar.style.width = '100px';
    bar.style.height = `${numberArray[i] * 5}px`;
    bar.innerText = numberArray[i];
    bar.style.top = `${500 - numberArray[i] * 5}px`;
    
};
 

  
function refresh() {
    for (let i = 0; i < sti.length; i++) {
        sti[i].innerHTML = sti[i].id
        
        sti[i].style.backgroundColor = getRandomColorRgb()
    }
}

setInterval(refresh)

function getRandomColorRgb() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} 