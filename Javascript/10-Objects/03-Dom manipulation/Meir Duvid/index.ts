// alert("connect")

const copy:HTMLElement = document.querySelector("#copy");
const paste:HTMLElement = document.querySelector("#paste");

console.dir(copy);
console.dir(paste);

function copyText (copy,paste):any{
    paste.innerHTML = copy.innerHTML
    return paste;
}

copyText(copy,paste);
