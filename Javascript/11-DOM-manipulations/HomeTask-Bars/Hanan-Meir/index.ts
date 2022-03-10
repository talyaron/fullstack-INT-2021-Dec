const numberArray: Array<number> = [25, 55, 30];
const warp: HTMLDivElement = document.querySelector(`.wrapper`);
const sti: any = document.querySelectorAll(`.stick`);


for (let i = 0; i < numberArray.length; i++) {
    let bar = sti[i];
    bar.style.width = '100px';
    bar.style.height = `${numberArray[i] * 5}px`;
    bar.innerText = numberArray[i];
    bar.style.top = `${500 - numberArray[i] * 5}px`;
    bar.style.backgroundColor = getRandomColor();
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color)
    return color;
}

