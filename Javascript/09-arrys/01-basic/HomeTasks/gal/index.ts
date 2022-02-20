// ----'friend's array'------

const a: Array<string> = [`shahar`, `yam`, `gal`, `rotem`, `kobe`, `hanan`]

for (let i = 0; i < a.length; i++) {
    console.log(`welcome ${a[i]}`)
}

// ----'numbers array'-----

let b: Array<number> = [0, 1, 2, 3, 4, 6, 7, 8, 9, 5]

for (let i = 0; i < b.length; i++) {
    if (b[i] > 5) {
        console.log(`the number ${b[i]} is bigger then 5`)
    }
    else if (b[i] == 5) {
        console.log(`the number ${b[i]} is equal to 5`)
    }
    else {
        console.log(`the number ${b[i]} is smaller then 5`)
    }
}

// ----3th array----

const c:Array<any>=[`fullstack`, 78, `barca`, `eilat`, `%$%$`, num]
    for (let i=0; i< c.length; i++){
        console.log(`the element ${c[i]} is ${typeof c[i]}`)
<<<<<<< HEAD
        if(typeof c[i] == `function`)
=======
        if(typeof c[i] === `function`)
>>>>>>> 9a56da96cddbc152d27dcc94a23df82cc453a41b
            console.log (`function is ${c[i](4,6)}`)
    }
function num(a:number,b:number, c:number){
    return a+b;
}

// ----`average array`-----

const d:Array<number>=[2,4,8,16,32,64,128];


function roundDigits(number: number, numberOfDigits: number) {  
  
    return Math.round(number * Math.pow(10, numberOfDigits))/ Math.pow(10, numberOfDigits);
  
}

function average (d:Array<number>):number{
    let sum:number= 0;
        for(let i=0; i<d.length ;i++){
            sum+=d[i];
        }
        return sum/d.length;
}


console.log(`the average number of the "average array" is ${(roundDigits(average (d), 4))}`)
