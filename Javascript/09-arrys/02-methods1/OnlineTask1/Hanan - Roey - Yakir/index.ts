

const arrayNumbers: Array<any> = [10, 15, 60, 80, 90, 100, 101, 110, 200, 300];

const newArr = arrayNumbers.map(elm=>{
    if(typeof elm === 'number') {
     if(elm>100)   {
        return elm;
     }
    }
    ).filter(elm=>typeof elm === 'number');

console.log(newArr);