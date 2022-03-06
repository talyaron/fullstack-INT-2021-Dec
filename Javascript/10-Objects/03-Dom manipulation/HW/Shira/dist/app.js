var firstDivElm = document.querySelector('#firstDiv');
var secondDivElm = document.querySelector('#secondDiv');
var wrapperDiv = document.querySelector('#wrapper');
// console.log(firstDivElm.innerText)
// console.log(secondDivElm.innerText);
console.dir(firstDivElm);
console.dir(firstDivElm.style);
firstDivElm.style.color = 'pink';
firstDivElm.style.backgroundColor = 'black';
firstDivElm.style.fontFamily = 'arial';
firstDivElm.style.marginLeft = '200px';
secondDivElm.style.color = 'white';
secondDivElm.style.backgroundColor = 'pink';
secondDivElm.style.fontFamily = 'arial';
function copyText(element) {
    secondDivElm.innerText = firstDivElm.innerText;
}
copyText(firstDivElm);
