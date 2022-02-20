var number = +prompt("Give me a number between 2- 10");
console.log(number);
function biggerThanFive(number) {
    try {
        //assertion
        if (typeof number !== "number")
            throw "number is not of type number";
        if (isNaN(number))
            throw "number is NaN";
        if (number >= 5) {
            return true;
        }
        else {
            return false;
        }
    }
    catch (err) {
        console.error(err);
        return undefined;
    }
}
var x = biggerThanFive(number);
if (x) {
    alert("The number you gave is bigger than 5 or equal to 5");
}
else if (x === undefined) {
    alert("You didnt enter a number");
}
else {
    alert("The number you gave is smaller than 5");
}
if (number > 10) {
    //do somthing
}
else if (number > 6) {
    //do somthing
}
else if (number > 2) {
    //do somthing
}
else {
    //do somthing
}
