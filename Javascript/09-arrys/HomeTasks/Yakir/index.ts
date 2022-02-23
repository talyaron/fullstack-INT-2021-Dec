

function returnArray(arr:Array<any>, arrTypeReturn:String):Array<any> {

    console.log (arr); // for console check and debuging

    var filterArrType:String;
    if(arrTypeReturn === "numbers") {
        filterArrType = "number";
} else if(arrTypeReturn === "strings"){
    filterArrType = "String";
}

    var ArrNew:Array<any> = arr.map( elm => elm).filter(elm=>typeof elm === filterArrType);

    if(ArrNew.length >= 1){
        return ArrNew;
    } else{
        // alert( `לא קיבלתי פקודה מתאימה` )
        console.log( `לא קיבלתי פקודה מתאימה` )
        return [];
    }
}

// ****** Tester ****
//*** Array Numbers  ***/
const inputNewArr:Array<any> = [1,2,3,`gdfgdf`, 4,5,6,7,8,"gfgfg"]; // will use for the testing
var outputNewArr:Array<any>;

console.log ("Test:");
console.log ("--------------:");
console.log ( `test 1: numbers and string ==> to Numbers Only`);
outputNewArr = returnArray(inputNewArr,`numbers`);
console.log (outputNewArr);
console.log ("--------------:");
console.log ( `test 2: numbers and string ==> to Strings Only`);
outputNewArr = returnArray(inputNewArr,`strings`);
console.log (outputNewArr);
console.log ("--------------:");
console.log ( `test 2: numbers and string ==> to Error Check`);
outputNewArr = returnArray(inputNewArr,`test error jkhjk`);
console.log (outputNewArr);
console.log ("--------------:");







