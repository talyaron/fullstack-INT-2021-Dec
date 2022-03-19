const root: HTMLElement = document.querySelector('#root');
const theImage: HTMLImageElement = document.querySelector('#theImage');
const theCard = document.querySelector('#theCard');


console.dir(root);
console.dir(theImage);
console.dir(theCard);

root.style.color = 'red';
root.innerText = 'Hello World';

console.log(theImage.src);

theCard.classList.remove('card');

function printToElment(element: HTMLElement): void {
    let counter: number = 0;
    const cleanText = setInterval(() => {
        element.innerText += `-${counter}-`;
        counter++;
        if (counter === 10) {clearInterval(cleanText);}
    },100);
}

printToElment(root);


