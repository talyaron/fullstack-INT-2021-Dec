const copy:HTMLElement = document.querySelector("#copy")
const paste:HTMLElement = document.querySelector("#paste")

console.dir(copy);
console.dir(paste);

function copytext(copy,paste):HTMLElement{
    paste.innerHTML = copy.innerHTML
    return paste;
}

copytext(copy,paste)