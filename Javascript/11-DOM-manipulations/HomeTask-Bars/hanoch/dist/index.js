var box = document.querySelector('.box');
var graf = [50, 20, 30];
function createDiv(text) {
    box = document.createElement("box");
    box.appendChild(document.createTextNode(text));
    return box;
}
//  let schema ;
//  for(let i = 0; i<graf,length;i++){
//      if (box < graf.length){
//          box += box;
//      }
//  }
//  document.querySelector.
// let dup:
// function duplicate(box1, graf1){
//     graf1.forEach(elm=>{
//         schema =elm * 10;
//         console.log(schema)
//         box1.style.height = schema + 'px';
//         var dup =  elm.innerHTML * box1
//         console.dir(dup)
//     })
//     // let dup = box * graf.length
//     // return dup
// }
// box = duplicate(box,graf)
