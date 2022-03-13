// alert("connect")
var copy = document.querySelector("#copy");
var paste = document.querySelector("#paste");
console.dir(copy);
console.dir(paste);
function copyText(copy, paste) {
    paste.innerHTML = copy.innerHTML;
    return paste;
}
copyText(copy, paste);
