var blockOneText = document.querySelector('#blockOne > p');
var blockTwoText = document.querySelector('#blockTwo > p');
function copyText(copiedText, pastedText) {
    var newCopiedText = copiedText.innerText;
    pastedText.innerText = newCopiedText;
}
copyText(blockOneText, blockTwoText);
