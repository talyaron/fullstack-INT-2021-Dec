var arr = ['sim-harif', 5, 'moti-lohim', 10, 50, 150, 'sami-saviv', true];
//*******************************************EXPLANATION**************************************************************//
// Run the function returnTypedArray with two inputs
//  1. Array
//  2. Variable - 'STRING' get new arr of strings || 'NUMBER' get a new arr of numbers
// The function will return a new array in context of the type of the variable you gave (number/string - other error) //
//*******************************************EXPLANATION**************************************************************//
var returnTypedArray = function (arr, variable) {
    if (typeof (variable) === 'string') {
        return addOragnToArray(arr, 'string');
    }
    else if (typeof (variable) === 'number') {
        return addOragnToArray(arr, 'number');
    }
    else {
        console.log("Sorry \"" + typeof (variable) + "\" type isn't valid");
        console.log("I can get only \"number\" or \"string\" varibale");
        return arr = [];
    }
};
//*******************************************EXPLANATION****************************************************//
// This function is optinal to make the code more cleaner and Refactor the main function
// add OragnToArray takes two inputs:
//  1. Array
//  2. variable - not Chanable made it to be call the variable that I need in the main function
//                that variable is made to run 1 function on two different logics.
// The function returns new array with the right elements by looping over the array and checking oragn
//*******************************************EXPLANATION****************************************************//
var addOragnToArray = function (arr, variable) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === variable) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};
