

function returnArray(arr:Array<any>, arrTypeReturn:String):Array<any> {

    var filterArrType:String;
    if(arrTypeReturn === "numbers") {
        filterArrType = "number";
} else if(arrTypeReturn === "Strings"){
    filterArrType = "String";
}

    var ArrNew:Array<any> = arr.map( elm => elm).filter(elm=>typeof elm === filterArrType);

    if(ArrNew.length >= 1){
        return ArrNew;
    } else{
        alert( `לא קיבלתי פקודה מתאימה` )
        return [undefined];
    }
}

// ****** Tester ****

const inputArray:Array<any> = [1,2,3,4,5,6,7,8,"gfgfg"];
const NewArr:Array<any> = returnArray(inputArray,`numbers`);

console.log (NewArr);





