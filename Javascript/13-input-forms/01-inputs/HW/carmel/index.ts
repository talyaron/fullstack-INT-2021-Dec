const body:HTMLBodyElement=document.querySelector("body")
const pic:HTMLDivElement=document.querySelector(".answerpic")
const num:HTMLDivElement=document.querySelector(".answernum")

function handleUploadPic(event) {
    const theImg = document.createElement("img")
    theImg.src = event.target.value
    pic.innerHTML = ''
    pic.appendChild(theImg)
}
function handleChoseNum(event){
    const theNum = event.target.value 
    if (isNaN(theNum)){
        num.innerHTML = 'please enter a number'
    }
    else {
        num.innerHTML = theNum
    }
}
    
