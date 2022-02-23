/* Method One ===> For Loop */
var arr = [5, 'Hello World', Math.pow(2, 2), 18, "Hey", 555, 'mmm'];
//Function Start
var filterArray = function (usersArray, type) {
    //internal Function Variables//
    var temp_arr = [];
    //internal Function Variables//
    try {
        //checks if the passed to the function "filterArray"  parameters are valid //
        if (typeof type !== "string" && typeof type !== "number")
            throw "This is not a number or a string";
        //looping through the passed to function, array
        for (var i = 0; i < usersArray.length; i++) {
            if (typeof usersArray[i] == typeof type) {
                temp_arr.push(usersArray[i]);
            }
        }
        return temp_arr;
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
};
//Function End
console.log(filterArray(arr, 4));
// console.log(filterArray(arr, 4));
// console.log(filterArray(arr, Math.pow));
/* Method One ===> For Loop */
/* Method Two ===> .Map Function */
/* const define2 = (list:Array<any>, value) => {
  const new_list =  list.map(elm=> {
    if (typeof elm === "number" && typeof value === "number") return elm
}).filter(elm => typeof elm === "number");
return new_list;
}
console.log(define2(arr, "number"));
 */
