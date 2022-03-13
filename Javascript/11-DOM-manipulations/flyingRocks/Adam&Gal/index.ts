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

if(elm2p.leftPosition > elm1p.leftPosition && elm2p.leftPosition <elm1p.rightPosition){
    console.log('Overlap')
} else{
    console.log('no Overlap')
}


 setInterval (wrapper1, 3000)
setInterval (wrapper2, 3000)
    

<<<<<<< HEAD
function elementsOverlap('wrapper1','wrapper2') {
    const domRect1 = wrapper1.getBoundingClientRect();
    const domRect2 = wrapper2.getBoundingClientRect();
=======
// function elementsOverlap('elm1',`elm2`) {
//     const domRect1 = el1.getBoundingClientRect();
//     const domRect2 = el2.getBoundingClientRect();
>>>>>>> 5a5f10ad3ab18ee47f058f2e2c59c22d1c278f4d
  
//     return (
//       domRect1.top > domRect2.bottom ||
//       domRect1.right < domRect2.left ||
//       domRect1.bottom < domRect2.top ||
//       domRect1.left > domRect2.right
//     );
//   }
  
//   const el1 = document.getElementsByClassName('wrapper1');
//   const el2 = document.getElementsByClassName('wrapper2');

  
// console.log(elementsOverlap(el1, el2))

