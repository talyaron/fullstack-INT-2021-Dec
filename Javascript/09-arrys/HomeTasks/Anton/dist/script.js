/* Method One ===> For Loop */
var arr = [5, 'Hello World', null, NaN, Math.pow, 18, "Hey", 555, 'mmm'];
//Function Start
var filterArray = function (usersArray, type) {
    //internal Function Variables//
    var temp_arr = [];
    //internal Function Variables//
    try {
        //checks if the passed to the function "filterArray"  parameters are valid //
        if (typeof type !== "string" && typeof type !== "number")
            throw "This is not a number or a string";
        for (var i = 0; i < usersArray.length; i++) {
            if (typeof usersArray[i] == "number" && type == "number") {
            }
            if (typeof usersArray[i] == "string" && type == "string") {
                console.log(usersArray[i]);
            }
        }
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
};
//Function End
console.log(filterArray(arr, "string"));
console.log(filterArray(arr, "number"));
console.log(filterArray(arr, Math.pow));
/* Method One ===> For Loop */
/* Method Two ===> .Map Function */
var define2 = function (list, value) {
    var new_list = list.map(function (elm) {
        if (typeof elm === "number" && typeof value === "number")
            return elm;
    }).filter(function (elm) { return typeof elm === "number"; });
    return new_list;
};
console.log(define2(arr, "number"));
