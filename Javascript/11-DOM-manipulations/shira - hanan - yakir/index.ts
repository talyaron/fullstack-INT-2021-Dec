const ugiCron: NodeListOf<HTMLElement> = document.querySelectorAll(".corona");

function coronaMove() {
  ugiCron.forEach((element) => {
    element.style.top = randomPosition() + "vh";
    element.style.left = randomPosition() + "vw";
  });

  // console.log(ugiCron[5].getBoundingClientRect().top);
  // console.log(ugiCron[5].getBoundingClientRect().bottom);
  // console.log(ugiCron[5].getBoundingClientRect().left);
  // console.log(ugiCron[5].getBoundingClientRect().right);
  overLapCheck()
  
}

console.log(ugiCron);

function randomPosition() {
  let postion: number;
  postion = Math.random() * 100;
  return postion;
}

var intervalID = setInterval(coronaMove, 10000);

function overLapCheck() {
  for (let i = 0; i < 26; i++) {
    for (let j = i+1; j < i-1; j++) {
      if 
        (
          ugiCron[i].getBoundingClientRect().top >
            ugiCron[j].getBoundingClientRect().bottom ||
          ugiCron[i].getBoundingClientRect().right <
            ugiCron[j].getBoundingClientRect().left ||
          ugiCron[i].getBoundingClientRect().bottom <
            ugiCron[j].getBoundingClientRect().top ||
          ugiCron[i].getBoundingClientRect().left >
            ugiCron[j].getBoundingClientRect().right
        )
      { console.log(`covid Collision id ${i} and ${j}`); }
    }
  }
}
