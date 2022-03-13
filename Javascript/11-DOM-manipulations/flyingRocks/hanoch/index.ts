function moveMeteor(){
    const random = Math.round(Math.random()*90) 
     return random
 }
 const meteorImg:NodeListOf<any> = document.querySelectorAll('.meteorImg')
 
 function move(){
     meteorImg.forEach(img=>{
         img.style.left = moveMeteor() + 'vw'
         img.style.top = moveMeteor()+ 'vh'
     })
     const meteorImg0 = meteorImg[0].getBoundingClientRect()
     const meteorImg1 = meteorImg[1].getBoundingClientRect()
     const meteorImg2 = meteorImg[2].getBoundingClientRect()
     const meteorImg3 = meteorImg[3].getBoundingClientRect()
     const meteors = [
         {
             leftPosition:meteorImg0.x,
             rightPosition:meteorImg0.right,
             topPosition:meteorImg0.y,
             bottomPosition:meteorImg0.bottom
         },
         {
             leftPosition:meteorImg1.x,
             rightPosition:meteorImg1.right,
             topPosition:meteorImg1.y,
             bottomPosition:meteorImg1.bottom
         },
         {
             leftPosition:meteorImg2.x,
             rightPosition:meteorImg2.right,
             topPosition:meteorImg2.y,
             bottomPosition:meteorImg2.bottom
         },
         {
             leftPosition:meteorImg3.x,
             rightPosition:meteorImg3.right,
             topPosition:meteorImg3.y,
             bottomPosition:meteorImg3.bottom
         }
     ]
     for ( let i = 0; i < meteorImg.length ; i++){
         for ( let j = 0; i < meteorImg.length; i++ ){
             if (i != j && meteors[i].rightPosition  >= meteors[j].leftPosition 
                 && meteors[i].leftPosition <= meteors[j].leftPosition &&
                  meteors[i].topPosition <= meteors[j].bottomPosition &&
                    meteors[i].bottomPosition >= meteors[j].bottomPosition) {
                     console.log('boom')
                 }
                 else if( i != j && meteors[i].leftPosition <= meteors[j].rightPosition &&
                        meteors[i].rightPosition >= meteors[j].rightPosition &&
                        meteors[i].topPosition <= meteors[j].bottomPosition &&
                        meteors[i].bottomPosition >= meteors[j].bottomPosition){
                            console.log('boom')
                        }
                else if(i != j && meteors[i].rightPosition >= meteors[j].leftPosition &&
                        meteors[i].leftPosition <= meteors[j].leftPosition &&
                         meteors[i].bottomPosition >= meteors[j].topPosition &&
                         meteors[i].topPosition <= meteors[j].topPosition){
                            console.log('boom')
                         } 
                else if( i != j && meteors[i].leftPosition <= meteors[j].rightPosition &&
                            meteors[i].rightPosition >= meteors[j].rightPosition &&
                            meteors[i].bottomPosition >= meteors[j].topPosition &&
                            meteors[i].topPosition <= meteors[j].topPosition){
                               console.log('boom')
                            } 
         }
 }
 
 }
 setInterval(move, 5000)
 move()
 