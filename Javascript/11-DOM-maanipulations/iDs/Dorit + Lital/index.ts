const boxs:any= document.querySelectorAll(".box");
boxs.forEach(element => {
   let idName:string=element.id
   element.innerText=idName
   console.log(idName)
});
console.dir(boxs)