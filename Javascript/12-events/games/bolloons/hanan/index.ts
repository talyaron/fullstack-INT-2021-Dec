let ballons = [`ballon`]
let windowWidth = window.innerWidth;
let body = document.querySelector(`.body`);
let windowHeight = window.innerHeight;
let scores = document.querySelectorAll(`.score`);let noPop = 0;
let total = 45;let currentBallon = 0;let gameOver = false;
let shadow = document.querySelector(".shadow");
let startBtn = document.querySelectorAll(`.start-btn`);

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


animateBallon(`div`);

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
};
function startGame(): void {
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