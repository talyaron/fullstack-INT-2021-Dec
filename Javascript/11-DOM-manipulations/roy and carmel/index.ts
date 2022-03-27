const astroidArray: NodeListOf<any> =document.querySelectorAll(`.astroid`);

function randomPlace() {
  let y = Math.floor(Math.random() * 90);
  return y;
}

const exploded: HTMLElement = document.querySelector(`.explode`);

const aswid = astroidArray[0].style.width;
const ashei = astroidArray[0].style.height;

function goneONclick(ev) {
  // ev.target.style.display='none'
  console.log(ev);
  let explod = ev.target;
  console.dir(explod);
  explod.src = "explode.png";
  setTimeout(() => {
    ev.target.style.display = "none";
  }, 2000);
}

for (let i = 0; i < astroidArray.length; i++) {
  astroidArray[i].onclick = goneONclick;
}

function checkForCrash() {
  const crashedORnot = ["no"];
  for (let i = 0; i < astroidArray.length; i++) {
    let thisx = astroidArray[i].style.left;
    let numthisx: number = thisx.replace("vw", "");
    let thisy = astroidArray[i].style.top;
    let numthisy: number = thisy.replace("vh", "");

    for (let j = i + 1; j < astroidArray.length; j++) {
      let otherx = astroidArray[j].style.left;
      let numotherx: number = otherx.replace("vw", "");
      let othery = astroidArray[j].style.top;
      let numothery: number = othery.replace("vh", "");
      let difx = Math.abs(numthisx - numotherx);
      let dify = Math.abs(numthisy - numothery);
      crashedORnot.push("no");
      // if (i == j) {
      //   break;
      // // }

      // console.log(crashedORnot[j]);
      if ( (crashedORnot[j] == "no")) {
        console.log("step one")
        if((difx <= aswid )&& (dify <= ashei)){
          console.log(difx, dify);
          console.log(crashedORnot[j]);
          astroidArray[j].src="explode.png"
          setTimeout(() => {
           astroidArray[j].style.display = "none";
          }, 2000);
          crashedORnot[j] = "yes";
        }
        
      }
    }
  }
}

function chaos() {
  for (let i = 0; i < astroidArray.length; i++) {
    astroidArray[i].style.top = randomPlace() + `vh`;
    astroidArray[i].style.left = randomPlace() + `vw`;
  }
}

setInterval(chaos, 5000);

setInterval(checkForCrash, 1000)
