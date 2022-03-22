

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const asteroids:any = document.querySelectorAll('#asteroid');

console.dir(asteroids)

asteroids.forEach(element=>{ 
    element.style.top = getRandom(0,100) + "vh"
    element.style.left = getRandom(0,100) + "vw"

})







