var arr = [10, 2, 34, 6, "b", "a", "B", "A"];
console.log(arr);
//methods are function of an object (in our case Array)
arr.forEach(function (elm) {
    try {
        console.log(elm);
    }
    catch (error) {
        console.error(error);
    }
});
// const index = arr.findIndex(elm=>{return elm === 6});
var index = arr.findIndex(function (elm) { return elm === 6; });
console.log("index:", index);
console.log(arr);
var sortedArray = arr;
sortedArray.sort(function (a, b) {
    return a - b;
});
console.log(sortedArray);
// if(2 === '2') console.log('2 == "2"')
// else console.log('2 != "2"')
//map build a new array from previous array
var newArr = arr.map(function (elm) {
    if (typeof elm === 'number')
        return elm * 100;
    else
        return "This wasnt a number!";
}).filter(function (elm) { return typeof elm === 'number'; });
console.log(newArr);
console.log(arr);
