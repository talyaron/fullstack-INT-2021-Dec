/* The Document method querySelector() returns the 
first Element within the document that matches the 
specified selector, or group of selectors. 
If no matches are found, 
null is returned. */

const root: HTMLElement = document.querySelector('#root');  
const theCard = document.querySelectorAll('.card')[0];
const theCard2 = document.querySelectorAll('.card')[1];
const theImage = document.querySelector('#theImage');


/* console.dir() is the way to see all the properties of a 
specified JavaScript object in console by which the developer can 
easily get the properties of the object. */

/* console.dir(root); 
console.dir(theCard);
console.dir(theImage); */

//theCard.innerHTML = 'Hello World';

function appendElement(element1, element2): void {
    element2.innerHTML += element1.innerHTML;
    return element2.innerHTML;
}

appendElement(theCard, theCard2);