function createBalloon(){
    const balloonId = uid();
    document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png" />`

    const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
    moveBalloon(balloon);
}

function moveBalloon(balloon:HTMLImageElement){
   

    balloon.style.top = '90vh';
    balloon.style.left = `${Math.random()*90}vw`
    setTimeout(()=>{
        balloon.style.top = '-12vh';
        
    },100)
}

setInterval(createBalloon,5000)


function uid(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}




function createBalloon1(){
    const balloonId = uid1();
    document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png" />`

    const balloon:any = document.querySelector(`#${balloonId}`);
    moveBalloon1(balloon);
    const playBomb = ()=> new Audio("./bomb/mixkit-bomb-explosion-in-battle-2800.wav").play();
    balloon.Array.forEach(element => {
        element.onclick = playBomb()        
    });
    
}

function moveBalloon1(balloon:HTMLImageElement){
   

    balloon.style.top = '90vh';
    balloon.style.left = `${Math.random()*90}vw`
    setTimeout(()=>{
        balloon.style.top = '-12vh';
        
    },100)
}
const randomNumber:number = Math.floor(Math.random() * 10000);
setInterval(createBalloon1,randomNumber)
createBalloon1()


function uid1(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}

