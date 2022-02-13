function averageAge(age) {
    var maxCap = 120;
    return ((100 * age) / maxCap);
}
var userAge = averageAge(60);
console.log("You spent " + userAge + "% of your life");
