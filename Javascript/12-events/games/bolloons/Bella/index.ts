
const getRandom = (min:number, max:number) => Math.floor(Math.random()*(max-min+1)+min);

const balloons:any = document.querySelectorAll('.baloonns');

function moveBalloons (){
balloons.forEach(element => {
    element.style.left= getRandom +'px'; // 👈🏼 Horizontally
    element.style.top = getRandom+'px'; // 👈🏼 Vertically 
});

    setInterval (moveBalloons, 1000)

