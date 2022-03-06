
const CopyToText:HTMLElement= document.querySelector('#card__A--copytext');
const PasteToText:HTMLElement= document.querySelector('#card__B--pastetext');

function copytext(copy:HTMLElement) {
    PasteToText.innerText= CopyToText.innerText
    return PasteToText

}

copytext(CopyToText);