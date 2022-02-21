
const array100 : Array <number> = [0,5,900,800,551,52,36,100,254,93];

console.log(array100);

array100.forEach((elm)=>{
 try
{
    console.log(elm);
}

catch (error)
{

    console.error(error);
}

});

const newarray100 = array100.map(elm=>{
    if (elm>100) return elm;
}).filter(elm=>typeof elm === 'number');

console.log(newarray100);



