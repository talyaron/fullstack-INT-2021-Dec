
//switch box content between elements (boxes)// 


const textFirstBox:HTMLElement=document.querySelector("#text1");
const textSecBox:HTMLElement= document.querySelector("#text2");

function switchCont (el1:HTMLElement, el2:HTMLElement){
    const temp=el1.innerText
    el1.innerText=el2.innerText
    el2.innerText=temp
    
}