const pi: number = Math.PI;

let radius: number = 4;
let r3: number = Math.pow(radius, 3);


let circleVol: number = (4 * pi * r3) / 3
console.log(`Circle Volume: ${circleVol}`);

const min: number = 100;
const max: number = 80000000;          // 0 - 1       79 999 900    +100 
const randPrize:number = Math.round((Math.random() * (max - min)) + min);
console.log(`You Won: ${randPrize}`);
console.log(`Mas took 50%: ${randPrize / 2}$ You left with: ${randPrize / 2}$`);
console.log(`Mas took 25%: ${randPrize * .25}$ You left with: ${randPrize*.75}$`);
console.log(`Mas took 10%: ${randPrize * .1}$ You left with: ${randPrize *.9}$`);

