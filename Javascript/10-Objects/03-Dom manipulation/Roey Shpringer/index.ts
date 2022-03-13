

let blockOneText = document.querySelector('#blockOne > p')



let blockTwoText = document.querySelector('#blockTwo > p')


function copyText(copiedText, pastedText){
    let newCopiedText = copiedText.innerText
    pastedText.innerText = newCopiedText
}




copyText(blockOneText, blockTwoText)
