//Friend list
var a = ["Shlomo", "Ofer", "Ari", "Moshe", "Aial"];
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
//Welcome to...
for (var i = 0; i < a.length; i++) {
    console.log("Welcome " + a[i] + "!");
}
///אם המספר גדול מ-5, הדפיסו ״המספר (המספר) גדול מ-5״
var b = [1, 2, 3, 4, 5, 6, 12, 18, 26, 36, 41, 45, 48, 59];
for (var i = 0; i < b.length; i++) {
    if (b[i] > 5) {
        console.log("the number " + b[i] + " is bigger than 5 ");
    }
}
///Array Type's
var arrayTypes = [3, 4, "Hello Word", 14, "rebmeir770@gmaul.com", true];
function add(a, b) {
    return a + b;
}
for (var i = 0; i < arrayTypes.length; i++) {
    console.log(typeof (arrayTypes[i]));
    if (typeof (arrayTypes[i]) === "function") {
        var result = arrayTypes[i](5, 8);
        console.log("the result is " + result);
    }
}
//צרו מערך של מספרים. צרו פונקציה שמקבלת את המערך ומחזירה מה ממוצע כל המספרים.
