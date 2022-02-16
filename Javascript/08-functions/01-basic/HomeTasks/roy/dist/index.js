//function 1//
function tell(numberofchildren, partnername, geoplce, jobtitle) {
    if (numberofchildren > 0) {
        return "you will have " + numberofchildren * 2 + " children" + " you will be marry " + partnername + " you will live at " + geoplce + " you will work as a"
            + " full stack developer ";
    }
    else
        (numberofchildren = 0);
    return "you will have " + " 5 children " + " you will be marry " + partnername + " you will live at " + geoplce + " you will work as a "
        + " full stack developer ";
}
var a = tell(0, "yael", "LA", "teacher");
console.log(a);
//function 2//
function yod(age) {
    return "your dog age is " + age * 7 + " yo in dogs years";
}
var b = yod(2);
console.log(b);
//function 3//
function suplly(age, apd) {
    return "you will need " + ((80 - age) * 365 * apd) + "$" + " to last until the ripe age at 80 ";
}
var c = suplly(24, 10);
console.log(c);
//function 4+5//
function circumference(r) {
    console.log("the circumference is " + 2 * (Math.PI) * r);
}
circumference(10);
function area(r) {
    console.log("the area is " + (Math.PI) * (Math.pow(r, 2)));
}
area(10);
//function 6+7//
function ctf(celsiusdegrees) {
    console.log(celsiusdegrees + "c is " + (celsiusdegrees * (9 / 5) + 32) + "f");
}
ctf(20);
function ftc(fahrenheitdegrees) {
    console.log(fahrenheitdegrees + "f is " + ((fahrenheitdegrees - 32) * 5 / 9) + "c");
}
ftc(80);
