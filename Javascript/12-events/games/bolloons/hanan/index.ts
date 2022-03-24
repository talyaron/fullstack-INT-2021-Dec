const ballons = [`ballon`]
const windowWidth = window.innerWidth;
const body = document.querySelector(`.body`);
const windowHeight = window.innerHeight;
const scores = document.querySelectorAll(`.score`);
const noPop = 0;
const total = 45;
const currentBallon = 0;
const gameOver = false;
const shadow = document.querySelector(".shadow");
const startBtn = document.querySelectorAll(`.start-btn`);

function createBallon() {
   let div = document.createElement(`div`);
   let rand = Math.floor(Math.random() * ballons.length);
   div.className = `ballon ballon-` + ballons[rand];
   rand = Math.floor(Math.random() * (windowWidth - 150))
   div.style.left = rand + `px`;

 div.dataset.number = currentBallon;
 currentBallon++;
 
 document.body.appendChild(div);

};


animateBallon(div);

function animateBallon(elem) {
   let position = 0;
   let random = Math.floor(Math.random() * 6 - 3);
   let interval = setInterval(frame, 12 - Math.floor(noPop /
      10) + random);

};

function frame() {
   if (position >= (windowHeight + 150) && (document.querySelector(`[data-number ="` + elem.detaset.number + `"]`) !== null)) {
      clearInterval(Interval);
   }
   else {
      position++
      elem.style.top = windowHeight - position + `px`;
   }

};

function popBallons(elem) {
   elem.remove();
   noPop++;
   scorupdate();
}
function scorupdate() {
   for (let i = 0; i < scores.length; i++)
      scores[i].textContent = noPop;
}
function startGame() {
   restartGame();
   let timeOut = 0;
   let loop = setInterval(function () {
      timeOut = Math.floor(Math.random() * 600 - 100);
      if (!gameOver && noPop !== total) {
         createBallon();
      }
      else if (noPop !== total) {
         clearInterval(loop);
         shadow.style.display = `flex`;
         shadow.querySelector(`.loser`).style.display =
            `block`
      }
      else {
         clearInterval(loop);
         shadow.style.display = `flex`;
         shadow.querySelector(`.winner`).style.display =
            `block`
      }
   }, 800 + timeOut);
   function restartGame() {
      let forRemoving = document.querySelectorAll(`.ballon`);
      for (let i = 0; i < forRemoving.length; i++) {
         forRemoving[i].remove();
      }
      gameOver = false;
      noPop = 0;
      scorupdate();
   }



}
document.addEventListener(`click`, function (ev) {
   if (ev.target.classList.contains(`ballon`)) {
      popBallons(ev.target);
   }
  
});

document.querySelector(`.restart`).addEventListener(`click`, function(){
   shadow.style.display = `none`;
   shadow.querySelector(`.winner`).style.display = `none`;
   shadow.querySelector(`.loser`).style.display = `none`;
   startGame();

});
document.querySelector(`cancel`).addEventListener(`.click`,function (){
shadow.style.display = `none`;
});

startBtn.addEventListener(`click`, function(){

startGame();
document.querySelector(`.main-game`).style.display = `none`;




})