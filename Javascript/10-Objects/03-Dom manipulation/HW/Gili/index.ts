

const form = document.querySelector('form');
const textToCopy: HTMLElement = document.querySelector('#copy_text');
const textToPaste: HTMLElement = document.querySelector('#paste_text');

function copyText(element: HTMLElement) {
    textToPaste.innerText = textToCopy.innerText
    return textToPaste
}

copyText(textToCopy)
