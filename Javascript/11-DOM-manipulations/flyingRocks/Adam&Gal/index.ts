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




//   ------1----  
// function myFunction() {
//     var div = document.getElementById("myDiv");
//     var rect = div.getBoundingClientRect();
//     x = rect.left;
//     y = rect.top;
//     w = rect.width;
//     h = rect.height;
//     alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);

//   }
//   ------2-----
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

