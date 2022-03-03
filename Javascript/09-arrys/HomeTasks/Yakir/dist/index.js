function returnArray(arr, arrTypeReturn) {
    console.log(arr); // for console check and debuging
    // difine the filter from the user for type-of...
    var filterArrType;
    if (arrTypeReturn === "numbers") {
        filterArrType = "number";
    }
    else if (arrTypeReturn === "strings") {
        filterArrType = "string";
    }
    // filter the array base on the user select
    var ArrNew = arr.map(function (elm) { return elm; }).filter(function (elm) { return typeof elm === filterArrType; });
    // check if the new array is with data or not
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
var inputNewArr = [1, 2, 3, "gdfgdf", 4, 5, 6, "hjghj", 7, 8, "gfgfg"]; // will use for the testing
var outputNewArr;
console.log("-------Tests-------:");
console.log("test 1: numbers and string ==> to Numbers Only");
console.log("input:");
outputNewArr = returnArray(inputNewArr, "numbers");
console.log("output:");
console.log(outputNewArr);
console.log("--------------:");
console.log("test 2: numbers and string ==> to Strings Only");
console.log("input:");
outputNewArr = returnArray(inputNewArr, "strings");
console.log("output:");
console.log(outputNewArr);
console.log("--------------:");
console.log("test 2: numbers and string ==> to Error Check");
console.log("input:");
outputNewArr = returnArray(inputNewArr, "test error jkhjk");
console.log("output:");
console.log(outputNewArr);
//*************************************************** */
