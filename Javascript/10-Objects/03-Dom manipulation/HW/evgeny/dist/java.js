var FirstText = document.querySelector('#first-text');
var Second = document.querySelector('#second-text');
console.dir(FirstText);
console.dir(Second);
function PrintToElement(FirstText, Second) {
    Second.innerText = FirstText.innerText;
    Second.textContent += " that got added";
}
;
PrintToElement(FirstText, Second);
