const hanuchName = 'Hanuch';
const hanuchLastName = 'Shachar';
const hanuchAddress = 'Rechovot';

console.log(`Hi ${hanuchName} ${hanuchLastName}. Your adress is ${hanuchAddress}`);

const hanuch = {
    //key:value, (//property)
    name:"Hanuch",
    lastName:"Shachar",
    address:"Rechuvot",
};

const dorit = {
    name:"Dorit", //property
    lastName:"Guy",
    address:"Rishon",
}

function sayHello(pesonObj){
    return `Hi ${pesonObj.name} ${pesonObj.lastName}. You live is ${pesonObj.address}`
}

const hello = sayHello(hanuch);
console.log(hello)
const hello2 = sayHello(dorit);
console.log(hello2)

// --- 

console.log(hanuch.address);
console.log(dorit);