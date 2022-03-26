// function createBalloon(){
//     const balloonId = uid();
//     document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png" />`

//     const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
//     moveBalloon(balloon);
// }
function moveBalloon(balloon:HTMLImageElement){
    //console.log("move balloon")
    balloon.style.top = '100vh';
    balloon.style.left = `${Math.random()*90}vw`
    body.addEventListener('click', bombPicture)
    setTimeout(()=>{
        //balloon.style.top = '-12vh';
        balloon.style.top = `${-1 * body.offsetHeight}px`
    },2000)
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
        console.dir(ev)
     if(ev.target.nodeName === 'IMG'){

        bombImg = document.querySelector("#bombImg"); 
        myAudio. play();
        bombImg.style.opacity="1"
        console.log(` opacity of bomb img ${bombImg.style.opacity}`)
        bombImg.style.position="absolute"
        bombImg.style.height="75px"
        bombImg.style.width = "75px"
        ev.target.remove()
        ev.target.style.top = "50vh"
        bombImg.style.left = ev.target.style.left
        bombImg.style.top = ev.target.style.top
        ev.target.style.opacity="0"
        setTimeout(()=>{
            bombImg.style.opacity = "0"
        },1000)
     }

            //console.log("bomb")
            //bombImg = document.querySelector("#bombImg"); 
            // bombImg.style.opacity="1"
            // console.dir(bombImg)
            // console.log(`opacity of bomb image ${bombImg.style.opacity}`)
            // myAudio. play();
            // bombImg.style.position="absolute"
            // bombImg.style.left = ev.target.style.left
            // bombImg.style.top = "50vh"
            // ev.target.opacity="0"
            // ev.target.remove()
            // //ev.target.style.opacity="0"
            // setTimeout(()=>{
            //     bombImg.style.opacity = "0"
            // },2000)
        }
  



function uid1(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}


let myAudio:HTMLAudioElement = new Audio('./img/mixkit-bomb-explosion-in-battle-2800.wav');
document.body.innerHTML += `<img id ="bombImg" width="75px" height="75px" src="./img/istockphoto-114409917-170667a.jpg"/>` 
let bombImg:HTMLImageElement = document.querySelector("#bombImg")
bombImg.style.position="absolute"
// bombImg.style.top = "100px"
// bombImg.style.left = "50vh"
bombImg.style.opacity="0"
let randomNumber:number = Math.floor(Math.random()*2000)+ 5000
let body = document.querySelector('body')
body.style.backgroundImage = `url('./img/skyies.jpg')`

setInterval(()=>{
    createBalloon1()
},randomNumber)









