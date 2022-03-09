const wrapper:any= document.querySelectorAll('.wrapper');
console.dir(wrapper);


function listRandomNumber(number):any{
    const num=Math.floor(Math.random()* number)
    return num
}

function meteor (){
    wrapper.forEach(element => {
        element.style.top=listRandomNumber(80)+`vh`
        element.style.right=listRandomNumber(80)+`vh`
    });
}

function RandomRotation() {
    wrapper.forEach(element => {
        element.style.transform = `rotate(${listRandomNumber(360)}deg)`
    });
}

RandomRotation()
setInterval (wrapper, 3000)






