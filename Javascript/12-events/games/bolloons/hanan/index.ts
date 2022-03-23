const ballons: NodeListOf<HTMLElement> = document.querySelectorAll(".ballons");
const boss: NodeListOf<HTMLElement> = document.querySelectorAll(".boss");

//////////תעופה של בלונים ובלון בוס function of movement for the objects////////////
function ballonFly(ballons) {
  ballons.forEach(element => {

    element.style.top = `-14vh`;
    element.style.left = randomPosition() + "vw";
  });

  
  
}


function bossballonFly(boss) {
  boss.forEach(element => {

    element.style.top = `-35vh`;
    element.style.left = randomPosition() + "vw";
  });
}


function randomPosition() {
  let postion: number;
  postion = Math.random() * 90;
  return postion;
}

ballonFly(ballons);
bossballonFly(boss);


//////////////////////////////////////////
