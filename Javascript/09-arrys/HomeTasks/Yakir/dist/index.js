function returnArray(arr, arrTypeReturn) {
    var filterArrType;
    if (arrTypeReturn === "numbers") {
        filterArrType = "number";
    }
    else if (arrTypeReturn === "Strings") {
        filterArrType = "String";
    }
    var ArrNew = arr.map(function (elm) { return elm; }).filter(function (elm) { return typeof elm === filterArrType; });
    if (ArrNew.length >= 1) {
        return ArrNew;
    }
    else {
        alert("\u05DC\u05D0 \u05E7\u05D9\u05D1\u05DC\u05EA\u05D9 \u05E4\u05E7\u05D5\u05D3\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DE\u05D4");
        return [undefined];
    }
}
// ****** Tester ****
var inputArray = [1, 2, 3, 4, 5, 6, 7, 8, "gfgfg"];
var NewArr = returnArray(inputArray, "numbers");
console.log(NewArr);
