var firhead = document.querySelector("#firhead"); //any is also fine (in place of `htmlElement`)
var thehead = document.querySelector("#thehead");
// console.log(firhead)
// console.log(thehead)
firhead.style.background = 'red';
function copyPast(element) {
    firhead.innerText = thehead.innerText;
    return thehead;
}
copyPast(firhead);
// firhead.innerText="100 pls" //the change (turn the comment off)
// thehead.innerText="turn the comment off"
