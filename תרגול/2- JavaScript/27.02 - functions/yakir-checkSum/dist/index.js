function checksum() {
    var a = +prompt("enter first number");
    var b = +prompt("enter second number");
    var c = +prompt("enter tierd number");
    if (a + b == c) {
        console.log(a + "+" + b + "=" + c);
    }
    else {
        console.log(a + "+" + b + "!=" + c);
    }
}
checksum();
