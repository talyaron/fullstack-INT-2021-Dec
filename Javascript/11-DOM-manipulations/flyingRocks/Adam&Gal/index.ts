const root2=  document.querySelectorAll('#root2');
console.dir(root2);

root2[0].style.backgroundColor = 'black';
root2.forEach(element=>{
    element.style.backgroundColor = getRandomColor()
    element.style.left = listRandomroot2() + "px"
    element.style.width = listRandomroot2()/10 + "px"
    element.style.height = listRandomroot2()/10 + "px"
})

setInterval (repeat, 3000)


function listRandomroot2(){
    const meteor ='123';
    let getRandomPostion:any='#';
    for (let i=0;i<1;i++){
        getRandomPostion+=
    getRandomPostion=meteor[(Math.random()*1000)];
    }
    console.dir(getRandomPostion)
    return getRandomPostion
}





