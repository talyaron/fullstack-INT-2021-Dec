const last = (a: any, b: any): any => {
    return a * b;
}


const arrAllTypes: Array<any> = [last, 10, 40, 'this', 'is', 'a', 70, 30, 60, 15, 25, 'string'];
console.log(arrAllTypes)


arrAllTypes.forEach((elm) => {
    try {

        if (typeof elm === "function") throw "Error! function is not of type number or string";

    } catch (error) {
        console.error(error);
        return 'sorry couldnt get that';
    }
});
const arrString = arrAllTypes.map(elm => {
    if (typeof elm === 'string') return elm


}).filter(elm => typeof elm === 'string');

console.log(arrString)

const arrNumber = arrAllTypes.map(elm => {
    if (typeof elm === 'number') return elm
  
   


}).filter(elm => typeof elm === 'number');
console.log(arrNumber)

const unKnown = arrAllTypes.map(elm=>{

  
     if(typeof elm === 'function') return console.log('I do not have any command for that statement')


} ).filter(elm => typeof elm === 'function');

console.log(unKnown)





