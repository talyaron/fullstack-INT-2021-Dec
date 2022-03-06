var copy = document.querySelector("#copy");
var paste = document.querySelector("#paste");
console.dir(copy);
console.dir(paste);
function copyText(copy, paste) {
    paste.innerText = copy.innerText;
    return paste;
}
copyText(copy, paste);
