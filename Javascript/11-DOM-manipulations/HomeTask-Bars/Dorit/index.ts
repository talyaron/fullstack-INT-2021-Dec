
let boxes:any = document.querySelectorAll('.box')
let histoArray:Array<number> = [];
let newNum:number = 0; 
//getting the input from user
while (newNum< 999) {
  newNum = +prompt("Please type a number to histogram rounded to hundreds, to end type 999")  
  histoArray.push(newNum)
}
histoArray.pop()

let topStr:any="500"
let leftNum:number=15
let leftStr:any="100"
let heightNum = 1000
let heightStr:any ="1000"

for(let i:number=0;i<histoArray.length;i++){
//I used window['p'+i] to use names of variables dynamicaly, so that I don't use "let" again and again for the same variable  
    window['p'+i] = document. createElement('div')
    window['p'+i].className='box'
    document. body. appendChild(window['p'+i]);
    heightNum = Math.round(histoArray[i]/5)
    heightStr=heightNum+"px"
    topStr=600-heightNum+"px"
    leftNum+=100
    leftStr=leftNum+"px"
    console.log(`heightStr ${heightStr}`)
    console.log(`topStr ${topStr}`)
    console.log(`leftStr ${leftStr}`)
    window['p'+i]. style.height=heightStr
    window['p'+i]. style.top=topStr
    window['p'+i]. style.left=leftStr
    window['p'+i]. style.backgroundColor="blue"
    window['p'+i]. style.width="60px";
    window['p'+i]. style.position='absolute'
    window['p'+i]. innerText = histoArray[i]
    window['p'+i]. innerHTML= 
      ''+"<span style=\"color:white\">" + histoArray[i] + "</span>"; 

    //window['p'+i]. style. cssText = 'position:absolute;top:topStr;width:500;backgroundColor:blue;height:heightStr';
    console.dir(window['p'+i].style.height)
    console.dir(window['p'+i].style.left)
}    
//let elementos:any = document.querySelectorAll(".box")
//console.dir(elementos)

 
