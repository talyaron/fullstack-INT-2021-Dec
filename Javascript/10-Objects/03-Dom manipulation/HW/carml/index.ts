const textOne:HTMLElement=document.querySelector("#text1");
const textTwo:HTMLElement= document.querySelector("#text2");

function thisfun(el1:HTMLElement, el2:HTMLElement){
    const temp=el1.innerText
    el1.innerText=el2.innerText
    el2.innerText=temp
    
}
const useranswer= window.prompt("would you like to fix the page?")
if (useranswer=="yes")
{
    thisfun(textOne, textTwo)
}
else{
    alert("you are rude!")
}
