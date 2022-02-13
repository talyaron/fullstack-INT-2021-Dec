//functions

function multi(a:number, b:number):number{
    return a*b;
}

const x = multi(5,8);
console.log(x); //40
const y = multi(10,8);
console.log(y);
const z = multi(x,2);
console.log(z); //80
const w = multi(x,y);
console.log(w) // 40*80 = 3200


//exercise
// write an umber, which thake a name and says "helo <name>";

function greeting(name:string){
    return `Hello ${name}` 
}

const e = greeting('Gili');


console.log(e)

