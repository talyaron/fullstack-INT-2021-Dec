

const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

const asteroid = document.querySelector('#asteroid');

asteroid.forEach(element=>{ 
    element.style.top = getRandom() + "vh"
    element.style.left = getRandom() + "vw"
}



// const asteroid:Array<any> = [document.querySelectorAll('#asteroid')]
// console.dir(asteroid)




// expected output: "a"
// expected output: "b"
// expected output: "c"
