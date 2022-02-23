var myArray = ['bebe', 34, 'rere', 98, 'asap', 55, 'familia'];
var userChoice = prompt("you must choose! STRINGS or NUMBERS? whar will it be?");
function myFUN(arr, choice) {
    try {
        var newArr_1 = [];
        if (choice == "STRINGS") {
            //         newArray.push('BOHP')
            //     }
            //     return newArray
            // }
            for (var i = 0; i < arr.length; i++) {
                if (typeof (arr[i]) == "string") {
                    newArr_1.push(arr[i]);
                }
            }
            return newArr_1;
        }
        else if (choice == "NUMBERS") {
            for (var i = 0; i < arr.length; i++) {
                if (typeof (arr[i]) == "number") {
                    newArr_1.push(arr[i]);
                }
            }
            return newArr_1;
        }
        else {
            throw new Error("input is invalid");
        }
    }
    catch (err) {
        alert("input is invalid");
    }
}
console.log("this is the original array: " + myArray);
var newArr = myFUN(myArray, userChoice);
if (newArr == undefined) {
    console.log("sorry, your input was invalid");
}
else {
    console.log("this is the new array you requested: " + newArr);
}
