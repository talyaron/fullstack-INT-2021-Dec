
const FirstText:HTMLElement = document.querySelector('#first-text');
const Second:HTMLElement = document.querySelector('#second-text');

console.dir(FirstText);
console.dir(Second);

function PrintToElement (FirstText, Second){
    
    Second.innerText = FirstText.innerText
    Second.textContent += " that got added"
};
PrintToElement(FirstText, Second);


