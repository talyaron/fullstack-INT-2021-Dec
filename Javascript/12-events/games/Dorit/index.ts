// function createBalloon(){
//     const balloonId = uid();
//     document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png" />`

//     const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
//     moveBalloon(balloon);
// }
function moveBalloon(balloon:HTMLImageElement){
    //console.log("move balloon")
    balloon.style.top = '90vh';
    balloon.style.left = `${Math.random()*90}vw`
    body.addEventListener('click', bombPicture)
    //console.log("befor timeout")
    setTimeout(()=>{
        balloon.style.top = '-12vh';
    },700)
}

//setInterval(createBalloon,5000)


function uid(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}

function createBalloon1(){
    const balloonId = uid1();
    document.body.innerHTML += `<img id=${balloonId} class="balloon" src="https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png"/>`
    let balloon:any = document.querySelector(`#${balloonId}`);
    //moveBalloon1(balloon);
    //console.log("to move balloon")
    body.addEventListener("click", bombPicture)
    moveBalloon(balloon)
 
}


    // body.addEventListener('click', function (event:any){
    // if(event.target.nodeName === 'IMG'){
    //     popSound.play();
    //     pointsCounter++;

    //     event.target.remove();
    // }
    // })



    
    function bombPicture(ev){
        if(ev.target.nodeName === 'IMG'){
            console.log("bomb")
            bombImg = document.querySelector("#bombImg"); 
            myAudio. play();
           // bombImg.style.height="75px"
           // bombImg.style.width = "75px"
            bombImg.style.position="absolute"
            bombImg.style.left = ev.target.style.left
            bombImg.style.top = "50vh"
            bombImg.style.height = "75px"
            bombImg.style.width = "75px"
            bombImg.style.opacity="1"
            ev.target.remove()
            //ev.target.style.opacity="0"
            setTimeout(()=>{
                bombImg.style.opacity = "0"
            },200)
        }
    }    

function moveBalloon1(balloon:HTMLImageElement){
    balloon.style.top = '90vh';
    balloon.style.left = `${Math.random()*90}vw`
    body.addEventListener("click",bombPicture)
    setTimeout(()=>{
        balloon.style.top = '-12vh';
    },100)
}

function uid1(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}


let myAudio:HTMLAudioElement = new Audio('./img/mixkit-bomb-explosion-in-battle-2800.wav');
document.body.innerHTML += `<img id ="bombImg" src="./img/istockphoto-114409917-170667a.jpg"/>` 
let bombImg:HTMLImageElement = document.querySelector("#bombImg")
bombImg.style.opacity="0"
let randomNumber:number = Math.floor(Math.random()*2000)+ 3000
let body = document.querySelector('body')

setInterval(()=>{
    createBalloon1()
},randomNumber)









