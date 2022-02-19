//  Task N.1
const friends: Array <any> = [`Shai`,`Ben`,`Alma`,`Ori`];

for (let i = 0; i < friends.length; i++) {
    console.log(`Welcome ${friends[i]}!`)
}

//Task N.2
const numArray: Array<number> = [1,2,3,4,5,10,20,30,40,50];

for (let K = 0; K < numArray.length; K++) {

    if (numArray[K] > 5) {
        console.log(`The Number ${numArray[K]} Is Bigger Than 5`)
    }
}

//Task N.3

const typeofArray: Array<any> =[`messi`, 10, 30, `kadima` ];
for(let v = 0; v < typeofArray.length; v++){
    console.log(` ${typeofArray[v]} typeof is ${typeof typeofArray[v]}`)
}

//Task N.4

const AvgArray: Array<number>=[2,5,6,8,12,20]

function AllDig(number: number, NumOfDig: number) {  
  
    return Math.round(number * Math.pow(10, NumOfDig))/ Math.pow(10, NumOfDig);
  
}

function Avg (AvgArray:Array<number>):number{
    var num:number= 0;
        for(let i=0; i<AvgArray.length ;i++){
            num+=AvgArray[i];
        }
        return num/AvgArray.length;
}


console.log(`the average number between (2,5,6,8,12,20) is ${(AllDig(Avg (AvgArray),1 ))}`)


