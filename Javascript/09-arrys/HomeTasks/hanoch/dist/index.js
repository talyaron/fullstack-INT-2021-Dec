var a = ["YEHUDA", 'moshe', 'david', 'israel'];
console.log(a);
for (var i = 0; i < a.length; i++) {
    console.log("wellcome", a[i]);
}
var b = [1, 8, 4, 7];
for (var o = 0; o < b.length; o++) {
    //  console.log(b[o])
    if (b[o] > 5) {
        console.log("the number", b[o], "is beeger then 5 ");
    }
}
function multy(a, b) {
    return a * b;
}
var d = ['hanoch', 33, multy];
for (var j = 0; j < d.length; j++) {
    console.log(typeof d[j]);
    if (d[j]["typeof"] == 'function') {
        console.log(d[j](5, 5));
    }
}
