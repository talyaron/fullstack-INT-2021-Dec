
 function showPlayerImg(event:any){
     console.log(event)
    //  let myPlayer=document.getElementById('selectFootball');
     if(event.target.value=="messi"){
         console.log("hey")
     let valueOpactiy=event.target.value;
      let outPutOfdiv: HTMLElement=document.getElementById("messiid");
      outPutOfdiv.innerHTML =`<img src="./dist/messi.jpg">`;

    
     }
    }


    // let outPutOfdiv1: HTMLElement=document.getElementById("federerid");
    // outPutOfdiv.innerHTML =`<img src="./dist/federer.jpg">`;

    // let outPutOfdiv2: HTMLElement=document.getElementById("mjid");
    // outPutOfdiv.innerHTML =`<img src="./dist/mj.jpg">`;