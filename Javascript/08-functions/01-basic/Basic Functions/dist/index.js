//functions
function multi(a, b) {
    return a * b;
}
var x = multi(5, 8); //invoke
console.log(x); //40
var y = multi(10, 8);
console.log(y);
var z = multi(x, 2);
console.log(z); //80
var w = multi(x, y);
console.log(w); // 40*80 = 3200
//exercise
// write an umber, which thake a name and says "helo <name>";
function greeting(name) {
    return "Hello " + name;
}
var e = greeting('Gili');
console.log(e);
