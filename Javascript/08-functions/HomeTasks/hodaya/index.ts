const arrAlltyps:Array<any>=[`dog`,`mom`,`card`,35,`n`,70,19,80,`am`,6,`hello`];
console.log(arrAlltyps);

arrAlltyps.forEach((elm)=>{
    try{
        // if (typeof arrAlltyps!== "number") throw "number is not of type number";
        console.log(elm)
    }catch(error){
        console.error(error);
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





