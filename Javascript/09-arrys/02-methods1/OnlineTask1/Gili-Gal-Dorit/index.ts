console.log(`hi`)

const numArry:Array<number> = [4, 17, 50, 52, 106, 108, 127, 132, 135, 146, 149, 162, 163, 166, 191, 215, 216, 254, 255, 271]
console.log(numArry)

const newArry = numArry.map(elm=>{
    if(elm > 100) return elm
}).filter(elm=>typeof elm === 'number');
console.log(newArry)

const index = numArry.findIndex((elm) => elm > 100);
console.log("index:", index);
console.log(numArry[index]);
