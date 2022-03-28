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

let userName:string

function saveUserName(event){
    userName=event.target.value
}

let userPassword:string

function saveUserPassword(event){
    userPassword=event.target.value
}
    
function handleName(event){
    let name=event.target.value
}