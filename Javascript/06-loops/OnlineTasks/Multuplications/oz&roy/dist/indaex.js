var d = 5;
var m = 100;
var a = 10;
var b = a ^ d;
if (m > b && (a % d == 0)) {
    for (var c = a; c < m; c = c + d) {
        console.log(c);
    }
}
