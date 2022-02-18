// הכינו מערך (array) של חברים שלכם. הדפיסו את החברים בלולאה.
// קחו את אותו מערך וכתבו לכל חבר ״ברוך הבא (שם-החבר)״
// הכינו מערך חדש של מספרים. העבירו את המערך בלולאה. אם המספר גדול מ-5, הדפיסו ״המספר (המספר) גדול מ-5״
// צרו מערך עם משתנים שונים, עברו על המערך בלולאה. התוכנה צריכה להגיד מה סוג המשתנה (typeof). אם השתנה הוא פונקציה, על התוכנה להריץ את הפונקציה (הכינו פונקציה שמקבלת שני מספרים).
// צרו מערך של מספרים. צרו פונקציה שמקבלת את המערך ומחזירה מה ממוצע כל המספרים.
// first task
var arr = ['Noy', 'May', 'Liat', 'Shani', 'Noam', 'Gal'];
for (var i = 0; i < arr.length; i++) {
    console.log("Welcome " + arr[i]);
}
// second task
var arr2 = [10, 6, -7, 9000, 26, 32, 46, 1, 0, 3];
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > 5) {
        console.log("the number " + arr2[i] + " is bigger then 5");
    }
    else {
        console.log("the number " + arr2[i] + " is smaller or equal to 5");
    }
}
// third task
var arr3 = ['Noy', 25, func, 'Micky', 17, 79, 'ZZZ'];
for (var i = 0; i < arr3.length; i++) {
    console.log("the element " + arr3[i] + " type is " + typeof arr3[i]);
    if (typeof arr3[i] == 'function') {
        console.log("function result is " + arr3[i](3, 2));
    }
}
function func(a, b) {
    return a + b;
}
// forth task
var arr4 = [10, 5, 0, -5, 20, 9];
function average(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        temp += arr[i];
    }
    return temp / arr.length;
}
console.log("the average of the numbers in the array is " + average(arr4));
