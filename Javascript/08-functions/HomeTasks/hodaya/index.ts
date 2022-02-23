const last = (a: any, b: any): any => {
    return a * b;
}


const arrAlltyps:Array<any>=[`dog`,`mom`,`card`,35,`n`,70,19,80,`am`,6,`hello`];
console.log(arrAlltyps);

arrAlltyps.forEach((elm)=>{
    try{
        if (typeof arrAlltyps!== "function") throw "function is not of type number";
       
    }catch(error){
        console.error(error);
        return `sorry couldnt get that`
    }

});
const arrString= arrAlltyps.map(elm =>{
    if(typeof elm === `string`) return elm


}).filter(elm=>typeof elm === `string`);
console.log(arrString);

const arrNumber= arrAlltyps.map(elm =>{
    if(typeof elm === `number`) return elm


}).filter(elm=>typeof elm === `number`);
console.log(arrNumber);

const unKnown = arrAllTypes.map(elm=>{

  
     if(typeof elm === 'function') return console.log('I do not have any command for that statement')


} ).filter(elm => typeof elm === 'function');

console.log(unKnown)



