function returnArray(arr, arrTypeReturn) {
    console.log(arr); // for console check and debuging
    var filterArrType;
    if (arrTypeReturn === "numbers") {
        filterArrType = "number";
    }
    else if (arrTypeReturn === "strings") {
        filterArrType = "String";
    }
    var ArrNew = arr.map(function (elm) { return elm; }).filter(function (elm) { return typeof elm === filterArrType; });
    if (ArrNew.length >= 1) {
        return ArrNew;
    }
    else {
        // alert( `לא קיבלתי פקודה מתאימה` )
        console.log("\u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05EA\u05D9 \u05E4\u05E7\u05D5\u05D3\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DE\u05D4");
        return [];
    }
}
// ****** Tester ****
//*** Array Numbers  ***/
var inputNewArr = [1, 2, 3, "gdfgdf", 4, 5, 6, 7, 8, "gfgfg"]; // will use for the testing
var outputNewArr;
console.log("Test:");
console.log("--------------:");
console.log("test 1: numbers and string ==> to Numbers Only");
outputNewArr = returnArray(inputNewArr, "numbers");
console.log(outputNewArr);
console.log("--------------:");
console.log("test 2: numbers and string ==> to Strings Only");
outputNewArr = returnArray(inputNewArr, "strings");
console.log(outputNewArr);
console.log("--------------:");
console.log("test 2: numbers and string ==> to Error Check");
outputNewArr = returnArray(inputNewArr, "test error jkhjk");
console.log(outputNewArr);
console.log("--------------:");
