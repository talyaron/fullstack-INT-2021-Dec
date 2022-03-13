let myWidth:number = 100
let myHeight:number = 100
let result:boolean = false
let astroids:any=document.querySelectorAll(".box")
// astroids.forEach(element=>{
//     element.style.top = getRandomPostion() + "vh"
//     element.style.left = getRandomPostion() + "vw"
    //console.log(element.style.top)
    //console.log(element.style.left)
//})

  function getRandomPostion():number {
    let postion:number=0;
    postion = Math.round(Math.random()*90)
    return postion;
}
setInterval(() => {
   astroids.forEach(element=>{
        element.style.top = getRandomPostion() + "vh"
        element.style.left = getRandomPostion() + "vw"
    }
   )
   for (let i:number = 0; i<astroids.length; i++){
    for (let j:number = i+1;j<astroids.length; j++){
        
        result = colision(astroids[i],astroids[j])
        console.log(`result = ${result} i=${i} j= ${j}`)
        //if (result == true){
        //    console.log(`colision ${i} ${j}`)
        //    return
        //}
    }
}    

}, 1000)

  function colision(elem1,elem2):boolean{
     let left1:string = elem1.style.left
     //console.log(`left1 before slice ${left1}`)
     left1 = left1.slice(0,left1.length-2)
     //console.log(`left1 after slice ${left1}`)
     let top1:string = elem1.style.top
     top1 = top1.slice(0,top1.length-2)
     let left2:string = elem2.style.left
     left2 = left2.slice(0,left2.length-2)
     let top2:string = elem2.style.top
     top2 = top2.slice(0,top2.length-2)
     let leftWidth1:any = parseInt(left1)+ myWidth
     let topHeight1:any = parseInt(top2) + myHeight
     let leftWidth2:any = parseInt(left2)+ myWidth
     let topHeight2:any = parseInt(top2) + myHeight
     if(left1<leftWidth2 && left1> left2){
         return true
     }else if(top1 < topHeight2 && top1 > top2){
         return true
     }else if(top2 < topHeight1 && top2 > top1){
        return true
     }else if(left2< leftWidth1 && left2 > left1){
        return true 
     }else{
         return false
     }     
 }
 
 //setInterval(() => {
//     for (let i:number = 0; i<astroids.length; i++){
//         for (let j:number = i+1;j<astroids.length; j++){
            
//             result = colision(astroids[i],astroids[j])
//             console.log(`result = ${result} i=${i} j= ${j}`)
//             //if (result == true){
//             //    console.log(`colision ${i} ${j}`)
//             //    return
//             //}
//         }
//    }    

//},1000)






// astroids.forEach(element=>{
//     element.top = Math.round(Math.random()*900)
//     element.left =  Math.round(Math.random()*900)
// }
// )

