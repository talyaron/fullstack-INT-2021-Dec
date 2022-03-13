
const copy:HTMLElement = document.querySelector ("#copy")
const paste:HTMLElement = document.querySelector ("#paste")

console.dir(copy)
console.dir(paste)

function copyTheText (copy,paste):HTMLElement{
    paste.innerText = copy.innerText
    return paste;
}

// function appendElement(element1, element2): void {
//     element2.innerHTML += element1.innerHTML;
//     return element2.innerHTML;
// }

copyTheText(copy, paste);