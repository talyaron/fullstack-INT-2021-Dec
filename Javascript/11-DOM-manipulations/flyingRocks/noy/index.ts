const meteors:any = document.querySelectorAll(".box");

// identify a collision
// getBoundingClientRect()
function collision(){
    for (let i=0; i<meteors.length;i++){
        let position1:DOMRect = meteors[i].getBoundingClientRect();
        for (let j=0; j<meteors.length && j!=i;j++){
            let position2:DOMRect = meteors[j].getBoundingClientRect();
            console.log(position1);
            console.log(position2);
            // if (position1.top === position2.top && position1.left === position2.left){
            //     console.log("collision");
            // }
        }

    }
}

// function that sets the meteors in a random position
function moveMeteors() {
    meteors.forEach(element => {
        element.style.top = `${getRandomPosition()}vh`
        element.style.left = `${getRandomPosition()}vw`
    })
}
setInterval(moveMeteors,3000);
setInterval(collision,3000);


// function that gets a random number for postion
function getRandomPosition() {
    let randonsize = Math.floor(Math.random() * 90);
    return randonsize;
}