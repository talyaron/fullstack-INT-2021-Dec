const numberArray: Array<number> = [25, 55, 30];
const warp: HTMLDivElement = document.querySelector(`.wrapper`);
const sti: any = document.querySelectorAll(`.stick`);
const barColors = ['#FF6633', '#FFB399', '#FF33FF'];

for (let i = 0; i < numberArray.length; i++) {
    let bar = sti[i];
    bar.style.width = '100px';
    bar.style.height = `${numberArray[i] * 5}px`;
    bar.innerText = numberArray[i];
    bar.style.top = `${500 - numberArray[i] * 5}px`;
    
};
 

  