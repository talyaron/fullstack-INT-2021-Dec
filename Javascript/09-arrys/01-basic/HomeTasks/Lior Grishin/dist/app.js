//*******************************************EX-1********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run the function printFriends(friendsArr)                                              //
//*******************************************************************************************//
//*************************************BEHIND-THE-SCENES*************************************//
// We created array with names                                                               //
// f - printFriends loop all over the array and printing each organ in an array              //
//*******************************************************************************************//
//*******************************************EX-1********************************************//
var friendsArr = ['Daniel', 'Roie', 'Michael', 'David', 'Maor', 'Eyal', 'Ran'];
var printFriends = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};
//*******************************************EX-2***********************************************//
//*************************************INSTRUCTIONS*********************************************//
// 1. Run the function greetFriends(friendsArr)                                                 //
//**********************************************************************************************//
//*************************************BEHIND-THE-SCENES****************************************//
// We have array with names                                                                     //
// f - greetFriends loop all over the array and printing 'Hello' with each an organ in an array //
//**********************************************************************************************//
//*******************************************EX-2***********************************************//
var greetFriends = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Welcome " + arr[i]);
    }
};
//*******************************************EX-3********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run runEx3(arrMaxNumber, arrLength). Ex: runEx3(10,10)                                 //
//*******************************************************************************************//
//*************************************BEHIND-THE-SCENES*************************************//
// f - createRandomNumberArray returns an array by user input:                               //
//  1. Max Number of an organ (number)                                                       //
//  2. Lengh of an array (number)                                                            //
// f - isBiggerThanFive returns an array only with numbers bigger than 5 by user input:      //
//  1. Array of Numbers                                                                      //
// f - printArr prints every elemet in array 'Number __ is bigger than 5' by user input:     //
//  1. Array of Numbers                                                                      //
//*******************************************************************************************//
//*******************************************EX-3********************************************//
var createRandomNumberArray = function (maxNumber, numberArrayLengh) {
    var numberArray = [];
    for (var i = 0; i < numberArrayLengh; i++) {
        var newRandNumber = Math.floor(Math.random() * maxNumber + 1);
        numberArray[i] = newRandNumber;
    }
    console.log("Original Array: " + numberArray);
    return numberArray;
};
var isBiggerThanFive = function (arr) {
    var biggerThanFiveArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            biggerThanFiveArr.push(arr[i]);
        }
    }
    return (biggerThanFiveArr);
};
var printArr = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log("Number " + arr[i] + " is bigger than 5.");
    }
};
var runEx3 = function (arrMaxNumber, arrLength) {
    var randomNumberArray = createRandomNumberArray(arrMaxNumber, arrLength);
    var newArrayBiggerThanFive = isBiggerThanFive(randomNumberArray);
    printArr(newArrayBiggerThanFive);
};
//*******************************************EX-4********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run runEx4(maxNumber). Ex: runEx4(150)                                                 //
//*******************************************************************************************//
//*************************************BEHIND-THE-SCENES*************************************//
// We created array with any types - arrTypes                                                //
// f - createRandomNumber returns random number between 1 and user input:                    //
//  1. - Max number                                                                          //
// f - sumAverage returns avrage between 2 numbers by user input:                            //
//  1. - Number 1                                                                            //
//  2. - Number 2                                                                            //
//  NOTE! - recommended get a random number from the f - createRandomNumber                  //
// f - typeOfArr returns the sumAvrage function resultby user input:                         //
//  1. - Array of any types                                                                  //
//  2. - Max Number - will be  the max number in the random range                            //
//*******************************************************************************************//
//*******************************************EX-4********************************************//
var createRandomNumber = function (max) {
    return Math.floor(Math.random() * max + 1);
};
var sumAverage = function (num1, num2) {
    return (num1 + num2) / 2;
};
var arrTypes = ['string', 5, true, 'Hello', sumAverage, 15 * 2, friendsArr];
var typeOfArr = function (arr, maxNumber) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (typeof (i) === 'function') {
            console.log("Found a function inside an array");
            var x = sumAverage(createRandomNumber(maxNumber), createRandomNumber(maxNumber));
            console.log("A function that sum 2 random numbers by your input max number");
            return x;
        }
    }
};
var runEx4 = function (maxNumber) {
    var startFunctionFromArray = typeOfArr(arrTypes, maxNumber);
    console.log("The avrage is: " + startFunctionFromArray);
};
//*******************************************EX-5********************************************//
//*************************************INSTRUCTIONS******************************************//
// 1. Run runEx5(maxNumberInArray, arrayLengh). Ex: runEx5(100 , 10)                         //
//*******************************************************************************************//
// f - arrAverage returns an avrage of the array numbers by user input:                      //
//  1. Array of numbers                                                                      //
// f - createRandomNumberArray returns an array by user input:                               //
//  1. Max Number of an organ (number)                                                       //
//  2. Lengh of an array (number)                                                            //
//*******************************************************************************************//
//*******************************************EX-5********************************************//
var arrAverage = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum / arr.length);
};
var runEx5 = function (maxNumberInArray, arrayLengh) {
    var arr = arrAverage(createRandomNumberArray(maxNumberInArray, arrayLengh));
    console.log("The average of the array is: " + arr);
};
