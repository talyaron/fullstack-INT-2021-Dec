//-------------task1----------------//
const Friends : Array<string> = ["sara" , "moran" ,"hodaya" ,"simcha"];
for(let i=0; i<Friends.length; i++){
    console.log (`Welcome ${Friends[i]}!`)
}

//-------------task2----------------//

const numbers : Array<number> = [1,2,3,4,5,6,7,8,9,10,20,28,32,40,6,7,1,2,5];
for(let k=0; k<numbers.length; k++){
 
    if( numbers[k]>5){
        console.log (`The number ${ numbers[k]} is greater than 5` )
    }
}

//-------------task3----------------//

const difArray : Array<any> = [2,4,"hello",5,multy1, 8, "welcome",multy2];
for(let w=0; w< difArray.length; w++){
  console.log(typeof difArray[w]);
   if(typeof difArray[w]==='function'){
       console.log(difArray[w](2,4));
   }

}

function multy1 (a,b){
    return (a*b); 
} 

function multy2 (a,b){
    return (a*a*a*b);
}

//-------------task4----------------//

const Averagenumbers :Array<number>= [2, 4, 6 ,8, 10, 12, 14, 16, 18, 20];
function average2(avg: Array<number>){
    let sum4 =0;
    for(let u=0; u<avg. length; u++){
        sum4+= avg[u];
    }
    return sum4/avg.length;
}

console.log(`The average of the numbers is ${average2(Averagenumbers)}`);
  