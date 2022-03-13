const firstDivElm: HTMLElement = document.querySelector('#firstDiv')
const secondDivElm: HTMLElement = document.querySelector('#secondDiv')
const wrapperDiv: HTMLElement = document.querySelector('#wrapper')

// console.log(firstDivElm.innerText)
// console.log(secondDivElm.innerText);
console.dir(firstDivElm)
console.dir(wrapperDiv)

console.dir(firstDivElm.style)

firstDivElm.style.color = 'pink';
firstDivElm.style.backgroundColor = 'black';
firstDivElm.style.fontFamily = 'arial';
firstDivElm.style.marginLeft = '200px';
secondDivElm.style.color = 'white';
secondDivElm.style.backgroundColor = 'pink';
secondDivElm.style.fontFamily = 'arial';

function copyText(element: HTMLElement): void {
    secondDivElm.innerText = firstDivElm.innerText
}
copyText(firstDivElm);