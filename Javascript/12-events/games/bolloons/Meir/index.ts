// const ballons:NodeListOf<HTMLImageElement> = document.querySelectorAll("#ballon");
// console.dir(ballons);

///////// Function create ballon
function createBalloon(){
    const balloonId = uid();
    document.body.innerHTML += `<img id=${balloonId} class="ballon" src="ballon.svg.png"/>`
    let ballon:any = document.querySelector(`#${balloonId}`);
    balloonId.onclick=bombPicture
    moveBalloon(balloon)
}

//////// Function move baloon
function moveBalloon(balloon:HTMLImageElement){
    balloon.style.top = '90vh';
    balloon.style.left = `${Math.random()*90}vw`
    balloon.onclick = bombPicture
    setTimeout(()=>{
        balloon.style.top = '-16vh'
    },700)
}

function uid(){
    return `id-${Math.ceil(Math.random()*1e8)}`
}



