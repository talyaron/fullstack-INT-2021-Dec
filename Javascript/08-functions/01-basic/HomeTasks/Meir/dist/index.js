//Tell Fortune
function tellFortune(jobTitle, geoLoc, parName, numkids) {
    return ("You will be a " + jobTitle + " in " + geoLoc + " married in " + parName + " with " + numkids + " childrens");
}
var time1 = tellFortune("optician", "Israel", "Meiital", 5);
console.log(time1);
var time2 = tellFortune("doctor", "Argentine", "Laura", 2);
console.log(time2);
var time3 = tellFortune("artist", "Peru", "Jenny", 3);
console.log(time3);
//Puppy Age Calculator
function caculateDogAge(puppysAge) {
    return ("Your doggie is " + puppysAge + " years old in in dog years!");
}
