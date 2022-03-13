const hodayaLoOna:HTMLDivElement=document.querySelector("#meteor")
const doritIsAwake:any=document.querySelectorAll(".dorit")
let boomImg:any = document.querySelector("#boom")

hodayaLoOna.onmousemove= wakeUpHodaya;
hodayaLoOna.ondblclick=bokerTovHodaya;
hodayaLoOna.onmouseover=dorit;
doritIsAwake.onmouseenter=wen;

doritIsAwake.forEach(elem=>{
    elem.onmousedown = MouseBoom
}

)
doritIsAwake.forEach(element => {
    element.ondblclick=MouseBoom
});


function MouseBoom(ev){
    boomImg.style.top= ev.target.style.top+150
    boomImg.style.left=ev.target.style.left+150
    boomImg.opacity=0
}

function wen (ev){
    ev.target.innerHTML += `<div>(${ev.x}, ${ev.y}) </div>`;
    ev.target.style.top=getRandomInt(100)+"vw";
    ev.target.style.left=getRandomInt(100)+"vw";
}

function wakeUpHodaya (ev){
    ev.target.style.backgroundColor = getRandomColor();
}


function bokerTovHodaya (ev){
    alert (`boker tov hodaya motek`)
} 

function dorit (ev){
    ev.target.innerHTML += `<div>(${ev.x}, ${ev.y}) </div>`;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  