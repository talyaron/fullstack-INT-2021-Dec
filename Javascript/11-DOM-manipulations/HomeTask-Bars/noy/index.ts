const numbersArray: Array<number> = [10, 15, 25, 14, 30, 17,60];
const wrapper: HTMLDivElement = document.querySelector(".wrapper");
const bars: any = document.querySelectorAll(".bar");

for (let i = 0; i < numbersArray.length; i++) {
    let bar = bars[i];
    bar.style.width = '100px';
    bar.style.height = `${numbersArray[i]*5}px`;
    bar.innerText = numbersArray[i];
    bar.style.top = `${500-numbersArray[i]*5}px`;
}