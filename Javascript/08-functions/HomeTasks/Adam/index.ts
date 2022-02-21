const Quest= +prompt(`is it a number or string?`)
console.log(Quest)

const ArrAny:Array<any> =[ 10,30,40,50,`Adam`,`Hapoel`]
console.log(ArrAny)

const NumOrStr:(Elm:string)

ArrAny.forEach((elm)=>{
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







