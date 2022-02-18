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
const c:Array<any>=[]

function num(a:number,b:number):number{
    return a+b;
}