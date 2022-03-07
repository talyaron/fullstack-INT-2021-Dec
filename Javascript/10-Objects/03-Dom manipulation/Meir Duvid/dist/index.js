var copy = document.querySelector("#copy");
var paste = document.querySelector("#paste");
console.dir(copy);
console.dir(paste);
function copytext(copy, paste) {
    paste.innerHTML = copy.innerHTML;
    return paste;
}
copytext(copy, paste);
