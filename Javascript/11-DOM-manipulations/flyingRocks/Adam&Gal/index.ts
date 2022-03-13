const wrapper1:any= document.querySelectorAll('.wrapper1');
const wrapper2:any=document.querySelectorAll('.wrapper2');
console.dir(wrapper1,wrapper2);

function listRandomNumber(number):any{
    const num=Math.floor(Math.random()* number)
    return num
}

function getRandom(){
    const randomPX = Math.floor(Math.random() * 100)
    return `${randomPX}vh`
}

function RandomRotation1(){
    wrapper1.forEach(element => {
        element.style.transform = `rotate(${listRandomNumber(360)}deg)`
    });
}

function RandomRotation2(){
    wrapper2.forEach(element => {
        element.style.transform = `rotate(${listRandomNumber(360)}deg)`
    });
}

function meteor1 (){
    wrapper1.forEach(element => {
        element.style.top=listRandomNumber(5)+`vh`
        element.style.bottom=listRandomNumber(10)+`vh`
        element.style.left=listRandomNumber(30)+`vv`
        element.style.right=listRandomNumber(30)+`vw`
        element.style.transform = `translate(${getRandom()}, ${getRandom()})`
    });
    setTimeout (meteor1,5000)
}

function meteor2 (){
    wrapper2.forEach(element => {
        element.style.top=listRandomNumber(5)+`vh`
        element.style.bottom=listRandomNumber(10)+`vh`
        element.style.left=listRandomNumber(30)+`vv`
        element.style.right=listRandomNumber(30)+`vw`
        element.style.transform = `translate(${getRandom()}, ${getRandom()})`
    });
    setTimeout (meteor2,5000)
}
    

RandomRotation1()
RandomRotation2()
meteor1()
meteor2()
// setInterval (wrapper1, 3000)
// setInterval (wrapper2, 3000)

const elm1 = document.querySelector('.wrapper1');
const elm2 = document.querySelector('.wrapper2');

const elm2p ={leftPosition:elm2.getBoundingClientRect().x}
console.log(elm2p)
const elm1p = {
    leftPosition:elm1.getBoundingClientRect().x,
    rightPosition:elm1.getBoundingClientRect().right
    
   
}
console.log(elm1p)

if(elm2p.leftPosition > elm1p.leftPosition && elm2p.leftPosition < elm1p.rightPosition){
    console.log('Overlap')
} else{
    (elm2p.leftPosition < elm1p.leftPosition && elm2p.leftPosition > elm1p.rightPosition)
    console.log('no Overlap')
}

const MouseBoom:any=document.querySelectorAll

MouseBoom.onmouseover=mouseInv;

function mouseInv(ev){
    MouseBoom.style.top= ev.target.style.top+150
    MouseBoom.style.left=ev.target.style.left+150
    MouseBoom.opacity=0
}
