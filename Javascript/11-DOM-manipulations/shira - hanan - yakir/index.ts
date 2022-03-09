


const ugiCron: NodeListOf<HTMLElement> = document.querySelectorAll(".corona");
function coronaMove(){
ugiCron.forEach((element) => {
  element.style.top = randomPosition() + "vh";
  element.style.left = randomPosition() + "vw";
});
}
console.log(ugiCron);

// document.documentElement.clientHeight /* 800 */
// window.innerHeight /* 800 */
// window.outerHeight /* 900 */

function randomPosition() {
  let postion: number;
  postion = Math.random() * 100;
  return postion;
}


var intervalID = setInterval(coronaMove, 1000);



