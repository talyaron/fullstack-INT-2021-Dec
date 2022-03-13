var CopyToText = document.querySelector('#card__A--copytext');
var PasteToText = document.querySelector('#card__B--pastetext');
function copytext(copy) {
    PasteToText.innerText = CopyToText.innerText;
    return PasteToText;
}
copytext(CopyToText);
