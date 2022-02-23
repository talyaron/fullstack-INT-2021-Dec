// Exercise 1:
var myArray = ['Shira', 'Hadar', 'Adi', 'Hila', 'Mika', 'Hadas', 'Noa'];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    // Exercise 2:
    console.log(" Welcome " + myArray[i]);
}
// Exercise 3:
var numberArr = [1, 2, 35, 50, 6, 80, 4, 3, 8, 11, 2];
for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 5)
        console.log("The number : " + numberArr[i] + " , is greater than 5");
}
// Exercise 4:
var typesArray = [2, 'Shira', 'aa55@gmail.com', 88, 'Hadar', calcBigAge, 200];
for (var i = 0; i < typesArray.length; i++) {
    console.log("The value type of " + typesArray[i] + " is : " + typeof typesArray[i]);
    if (typeof typesArray[i] == 'function') {
        console.log("The function result: " + typesArray[i](50, 20));
    }
}
// The function get 2 ages and return the big age.
function calcBigAge(a, b) {
    if (a > b)
        return a;
    else
        return b;
}
// Exercise 5:
//the function get scores of tests and return the score average.
var scoreAverage = [100, 85, 90, 95, 80, 100, 75];
var sameLength = scoreAverage.length;
var sum = 0;
function avg(sum, sameLength) {
    for (var i = 0; i < scoreAverage.length; i++) {
        sum += scoreAverage[i];
    }
    return ("The averege is: " + sum / scoreAverage.length);
    // return ( sum/scoreAverage.length )
}
console.log(avg(sum, scoreAverage.length));
