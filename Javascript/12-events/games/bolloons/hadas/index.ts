

function handleClick (ev){
    ev as HTMLElement;
    ev.target.style.display= 'none';
    let audio = new Audio(`1.wav`);
    audio.play();
    
   
}

function createBalloon()
{
    let newballon = document.createElement('img');
    newballon.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Red_toy_balloon.svg/491px-Red_toy_balloon.svg.png?20090312193428';
    newballon.style.top= `125vh`;
    newballon.style.left = `${(Math.random()*90)}vw`;
    newballon.classList.add('balloon');
    document.body.appendChild(newballon)
    newballon.onclick= handleClick;

}



function newballons(){
    for(let i = 0; i< 5; i++)
    {
        createBalloon();
    
    
    }
}
setInterval(newballons,7000)


function moveBalloon()
{
    let balloonsarr:NodeListOf<any> =  document.querySelectorAll (".balloon");
    balloonsarr.forEach(img => {
        img.style.top =  '-25vh';
        
        console.log(img.y);
        
        
        

    }); 

}

setInterval(moveBalloon, 7000);

