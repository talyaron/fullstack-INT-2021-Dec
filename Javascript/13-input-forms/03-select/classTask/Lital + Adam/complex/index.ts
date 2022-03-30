
 function showPlayerImg(event:any){
     console.log(event)
     let myPlayer=document.getElementById('selectFootball');
     if(event.target.value=="messi"){
     let valueOpactiy=event.target.style;
      valueOpactiy.opacity=0;
     }
    }


