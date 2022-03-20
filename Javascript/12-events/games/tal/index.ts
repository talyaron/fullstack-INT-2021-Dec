const balloons:NodeListOf<HTMLImageElement> = document.querySelectorAll('.balloon')
console.dir(balloons)

// moveBalloons(balloons)

// function moveBalloons(balloons:NodeListOf<HTMLImageElement>){
//     balloons.forEach(balloon=>{
//         moveBalloon(balloon);
//     })
// }

//create balloon
// -> move balloon
// in random times....
function createBalloon(){
    const balloonId = uid();
    document.body.innerHTML += `<img id='${balloonId}' class='balloon' src="./dist/img/balloon-blue.png" />`

    const balloon:HTMLImageElement = document.querySelector(`#${balloonId}`);
    moveBalloon(balloon);
}

function moveBalloon(balloon:HTMLImageElement){
   

    balloon.style.top = '112vh';
    balloon.style.left = `${Math.random()*90}vw`
    setTimeout(()=>{
        balloon.style.top = '-12vh';
        
    },100)
}

setInterval(createBalloon,1000)


function uid(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}

