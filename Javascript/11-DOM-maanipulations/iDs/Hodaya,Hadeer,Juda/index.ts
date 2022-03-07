
const boxId:any = document.querySelectorAll('.box');

boxId.forEach(element=>{

    let showId:any = element.id +element.style.background ;
    element.innerText = showId;
    console.log(showId);
})



