const RandomArray: Array<any> = [6, 11, 13, 10, "Me", "You", "Us", "True"];

console.log(RandomArray);



const newnumber= RandomArray.map(elm=> {
    if(typeof elm === 'number') {

        return elm;

    } 
}).filter(elm=>typeof elm === 'number');

console.log(newnumber);

const newstring= RandomArray.map(elm=> {
    if(typeof elm === 'string') {

        return elm;

    } 
}).filter(elm=>typeof elm === 'string');

console.log(newstring);

const unacceptable= RandomArray.map(elm=> {
    if(typeof elm !== 'number' && typeof elm !== 'string') {

        return 
    } 

}).filter(elm=>typeof elm === 'string' && elm === 'number' );

console.log(unacceptable,"Unacceptable Output");