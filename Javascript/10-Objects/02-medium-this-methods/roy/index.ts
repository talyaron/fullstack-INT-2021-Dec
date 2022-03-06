const text1= document.querySelector(`#text1`);
const text2= document.querySelector(`#text2`);

console.dir(text1)
console.dir(text2)


function merge(text1,text2){
    let copy=  text1.innerHTML+ text2.innerHTML
    return copy
}

const copy= merge(text1, text2)

document.querySelector(`#text2`).innerHTML=copy
