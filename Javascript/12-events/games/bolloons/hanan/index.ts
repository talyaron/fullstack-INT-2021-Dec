 const ballons:NodeListOf<HTMLElement> = document.querySelectorAll(".ballons");

 function ballonFly() {
   ballons.forEach(element => {
  
   
   element.innerHTML = "<img id='ballon' src=\"imgs/ooo.jpg>";
   element.style.visibility = "visible"
 
   element.style.top = randomPosition() + "vh";
       

       
   });
   function randomPosition() {
    let postion: number;
    postion = Math.random() * 90;
    return postion;
}

window.requestAnimationFrame(ballonFly)
var intervalID = setInterval(ballonFly, 1000);


 }

 

 