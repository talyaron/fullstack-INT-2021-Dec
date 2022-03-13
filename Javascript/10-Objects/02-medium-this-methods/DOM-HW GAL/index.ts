const firhead:HTMLElement=document.querySelector("#firhead"); //any is also fine (in place of `htmlElement`)
const thehead:HTMLElement=document.querySelector("#thehead");

// console.log(firhead)
// console.log(thehead)

firhead.style.background='red'

function copyPast (element:HTMLElement){ 
    firhead.innerText=thehead.innerText
    return thehead
}

copyPast (firhead)

// firhead.innerText="100 pls" //the change (turn the comment off)

// thehead.innerText="turn the comment off"
