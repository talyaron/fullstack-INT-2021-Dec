// create an array with numbers (only numbers)
// with map, return only numbers bigger than 100;


// after that, find the first number which is bigger than 100;

const arr1:Array<number> = [10,20,16,200,9007,5,310];

const mappedArr = arr1.map(elm=>{
    if (elm>100) return elm;

}).filter(elm=>typeof elm === 'number');
console.log(mappedArr);


const found = arr1.find(elm => elm > 100);
console.log(found);