


const ballons: NodeListOf<HTMLElement> = document.querySelectorAll(".ballons");
const boss: NodeListOf<HTMLElement> = document.querySelectorAll(".boss");

//////////תעופה של בלונים ובלון בוס function of movement for the objects////////////
function ballonFly(ballons, hight) {
  ballons.forEach(element => {

    element.style.top = `${hight}vh`;
    element.style.left = randomPosition() + "vw";
  });
}

function randomPosition() {
  let postion: number;
  postion = Math.random() * 90;
  return postion;
}

ballonFly(ballons, -14);
ballonFly(boss, -34);


/////////////////////reset/////////////////////
