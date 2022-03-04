var form = document.querySelector('form');
var textToCopy = document.querySelector('#copy_text');
var textToPaste = document.querySelector('#paste_text');
function copyAndPaste(element) {
    textToPaste.innerText = textToCopy.innerText;
    return textToPaste;
}
copyAndPaste(textToCopy);
