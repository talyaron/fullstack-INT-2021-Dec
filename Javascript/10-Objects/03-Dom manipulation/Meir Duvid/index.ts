
const copy:HTMLElement = document.querySelector("#copy");
const paste:HTMLElement = document.querySelector("#paste");

console.dir(copy);
console.dir(paste);

function copyText (copy,paste):HTMLElement{
    paste.innerText = copy.innerText
    return paste;
}


copyText(copy, paste);