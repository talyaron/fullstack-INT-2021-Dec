var y = 23; //global const
var w = 34; //global variable
for (var i = 0; i < 5; i++) {
    console.log(i);
    console.log(y);
    var x = 25;
    var z = 45;
    z = 3000;
    for (var j = 0; j < 3; j++) {
        console.log(z);
        var u = 400;
    }
}
//1000 lines later
//1000 lanes later
console.log(y + 2); //25
