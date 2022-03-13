let myWidth:number = 10 //width of astroids is constant
let myHeight:number = 10 // height of astroids is constant
let result:boolean = false
let astroids:any=document.querySelectorAll(".box") //array of astroids (box in html)
astroids.forEach(element=>{ //start places of astroids is random
    element.style.top = getRandomPostion() + "vh"
    element.style.left = getRandomPostion() + "vw"
})
// randomize the position of the astroids
  function getRandomPostion():number {
    let postion:number=0;
    postion = Math.round(Math.random()*90)
    return postion;
}
//initializing the varables of x and y
let leftn1:number = 0
let topn1:number = 0
let leftn2:number = 0
let topn2:number = 0
//the function gets two androids and checks for colision, returns true or false
function colision(elem1,elem2):boolean{
    //left of first element
    let left1:string = elem1.style.left // the string includes vh or vw
    left1 = left1.slice(0,left1.length-2) //getting rid of the vw or vw
    leftn1 = parseInt(left1) // transform string to integer
    //===================================
    //top of first element
    let top1:string = elem1.style.top
    top1 = top1.slice(0,top1.length-2)
    topn1 = parseInt(top1)
    //====================================
    //left of second element
    let left2:string = elem2.style.left
    left2 = left2.slice(0,left2.length-2)
    leftn2=parseInt(left2)
    //====================================
    //top of second element
    let top2:string = elem2.style.top
    top2 = top2.slice(0,top2.length-2)
    topn2=parseInt(top2)
    //====================================
    //right and bottom of the elements
    let leftWidth1:any = leftn1+ myWidth
    let topHeight1:any = topn1 + myHeight
    let leftWidth2:any = leftn2+ myWidth
    let topHeight2:any = topn2 + myHeight
    
    if(leftn1<leftWidth2 && leftn1> leftn2 // x axis of first element is inside second element
        
    &&topn1 < topHeight2 && topn1 > topn2) {// y axis of first element is inside second element
        return true
    }else{
        return false
    }     
}

let element:any = astroids[0]//initializing element variable
setInterval(() => {
    for(let i:number = 0; i<astroids.length; i++){ //running of every astroid against al the others
        element = astroids[i]
        element.style.top = getRandomPostion() + "vh"
        element.style.left = getRandomPostion() + "vw"
        for (let j:number = i+1;j<astroids.length; j++){//running every next astroid 
            console.log("to colision")  
            result = colision(astroids[i],astroids[j])
            console.log(`result = ${result} i=${i} j= ${j}`)
        }
    }    
},1000)

 
 
 

