const ugiCron: NodeListOf<HTMLElement> = document.querySelectorAll(".corona" || ".explosion");

function coronaMove() {
    ugiCron.forEach((element) => {
        
         //replace  element to covid again for new game
        element.innerHTML = "<img class='corona' src=\"covid19.jpeg\" alt=\"\">";
        element.style.visibility = "visible"
        //random position
        element.style.top = randomPosition() + "vh";
        element.style.left = randomPosition() + "vw";
        
    });

    // debugger

    overLapCheck()
    console.log("----next game:----")

}

console.log(ugiCron);
console.dir(ugiCron);

// function for random number for the position attributes 
function randomPosition() {
    let postion: number;
    postion = Math.random() * 90;
    return postion;
}

window.requestAnimationFrame(coronaMove)
var intervalID = setInterval(coronaMove, 10000);



function overLapCheck() {

    

    for (var i = 0; i < ugiCron.length; i++) {

        for (var j = i + 1; j < ugiCron.length; j++) {
            if (
                // check the conditions if not overlap then flip the boolean to overlap
                !(
                    ugiCron[i].getBoundingClientRect().top >
                    ugiCron[j].getBoundingClientRect().bottom ||
                    ugiCron[i].getBoundingClientRect().right <
                    ugiCron[j].getBoundingClientRect().left ||
                    ugiCron[i].getBoundingClientRect().bottom <
                    ugiCron[j].getBoundingClientRect().top ||
                    ugiCron[i].getBoundingClientRect().left >
                    ugiCron[j].getBoundingClientRect().right
                ) && i != j // eleminet the possibility for same index element
            ) {
                console.log(`covid Collision id ${i} and ${j}`);
                ugiCron[j].innerHTML = "<img class='explosion' src=\"Boom-PNG.png\" alt=\"\">"; //replace one element to explosion
                ugiCron[i].style.visibility = "hidden";// hide the other element

            }
        }
    }

}

ugiCron.forEach(element => {
    element.onclick = boomOnClick
});

function boomOnClick(ev) {
    
    //console.log(`you press on ${ev}`)  // for debug the code
    ev as HTMLElement;
    ev.target.innerHTML = "<img class='explosion' src=\"Boom-PNG.png\" alt=\"\">";
    ev.target.style.opacity = 0;
   
    var audio = new Audio(`Explosion Sounds/Exp2.mp3`);
    audio.play();
   
      
    
  };
  
  
  