function gender(a, age) {
    if (a == "Man") {
        var x = (age / 80 * 100);
    }
    else if (a == "Woman") {
        var x = (age / 88 * 100);
    }
    return "You are A " + a + " , and you lived  " + x + " of your life";
}
var z = "Man";
var q = gender(z, 30);
console.log(q);
