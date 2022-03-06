
const boxId:any = document.querySelectorAll('.box');

boxId.forEach(element=>{
    let showId:string = element.id ;
    element.innerText = showId;
    console.log(showId);
})


