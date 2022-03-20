const ballons: NodeListOf<HTMLElement> = document.querySelectorAll(".ballons");

function ballonFly(ballons) {
  ballons.forEach(element => {





    element.style.top = `-12vh`;
    element.style.left = randomPosition() + "vw";
     

  });
  function randomPosition() {
    let postion: number;
    postion = Math.random() * 90;
    return postion;
  }

}

ballonFly(ballons);



