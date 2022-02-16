//function 1//
function fortuneteller( kids:number, partner: string, geo: string, job: any){
 return (`you will be a ${job} in ${geo} and married to ${partner} with ${kids} kids`);
}
const function1= fortuneteller( 2, `adam`,`israel`,`musician`)
console.log(function1)

//function 2
function DAcalculate( dogyears:number){
    return dogyears*7;
}
const function2=DAcalculate (10);
console.log(`Your dooggie is ${function2} years old in dog years!`);

//function 3
function calculateSupply(age:number,amountPD:number){
    let MaxAge=80;
    let sumAge=(MaxAge-age);
    let totalsupply=(amountPD*365)*(sumAge);
    console.log(`you will need ${totalsupply} bottles of Cola to last you until the ripe old age ${MaxAge}`);
  
}
calculateSupply (22,1)

//function 4
function CelTOFahr( celsius:number ,CeltoFahr:Number){
    let CelConvertFahr= (celsius*9)/5+32;
    console.log(${celsius} `°C is` ${CelConvertFahr} `°F`
}