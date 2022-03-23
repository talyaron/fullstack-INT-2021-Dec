// function createBalloon(){
//     const balloonId = uid();
//     document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="https://freesvg.org/storage/img/thumb/rg1024-two-ballons.png" />`

//     const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
//     moveBalloon(balloon);
// }

function moveBalloon(balloon:HTMLImageElement){
    console.log("move balloon")
    balloon.style.top = '90vh';
    balloon.style.left = `${Math.random()*90}vw`
    balloon.onclick = bombPicture
    console.log("befor timeout")
    setTimeout(()=>{
        balloon.style.top = '-12vh';
        
    },1000)
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
    console.log("to move balloon")
    moveBalloon(balloon)
 
}

    // const bombPicture = document.body.innerHTML = `<img src ="/bomb/istockphoto-114409917-170667a.jpg"/>`
    function bombPicture(ev){
        console.log("we are here")
        bombImg = document.querySelector("#bombImg"); 
        myAudio. play();
        bombImg.style.height="75px"
        bombImg.style.width = "75px"
        bombImg.style.position="absolute"
        ev.target.style.top = "50vh"
        bombImg.style.left = ev.target.style.left
        ev.target.style.opacity="0"
        bombImg.style.opacity="1"
        setTimeout(()=>{
            bombImg.style.opacity = "0"
        },200)
        // ev.target.img.style.top=ev.target.style.top
        // ev.target.img.style.left=ev.target.style.left

    }

function moveBalloon1(balloon:HTMLImageElement){
    balloon.style.top = '90vh';
    balloon.style.left = `${Math.random()*90}vw`
    balloon.onclick = bombPicture; 
    setTimeout(()=>{
        balloon.style.top = '-12vh';
    },100)
}
function uid1(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}
let myAudio:HTMLAudioElement = new Audio('./bomb/mixkit-bomb-explosion-in-battle-2800.wav');
let randomNumber:number = 0
randomNumber = Math.floor(Math.random()*2000)+ 3000
//let balloon:HTMLImageElement = document.querySelector("#newBalloon")
document.body.innerHTML += `<img id ="bombImg" src="./bomb/istockphoto-114409917-170667a.jpg"/>` 
let bombImg:HTMLImageElement = document.querySelector("#bombImg")
bombImg.style.opacity="0"
setInterval(()=>{
    // randomNumber = Math.floor(Math.random() * (5000))+200
    // console.log(randomNumber)
    // setTimeout(()=>{
    //     createBalloon1()
    // },randomNumber)
    createBalloon1()
    
},randomNumber)






