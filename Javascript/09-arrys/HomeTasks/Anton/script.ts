/* first task */

const my_besties:Array<string> = ['Johnny Knoxville', 'Elon Musk', 'Vladimir Putin', 'Fridrich'];

for (var i = 0; i < my_besties.length; i++) {
    console.log(`Welcome: ${my_besties[i]}`)
}
/* first task */


/* second task */
const numbers = 10;
const arr:Array<number> = []
for (var i=0; i< numbers; i++) {
     arr.push(i);
     if (i > 5) {
         console.log("The number is bigger then 5");
     }
}
/* second task */


/* third task */
function num (var num1, var num2) {
    var sum= num1+num2;
    return sum;
}

const arr2:Array<any> = ['Peter Pan', 3, 'Max Payne', 'Solidity', 5, num]
for (var i=0; i<arr2.length; i++) {
    if (typeof arr2[i] === 'function' ) {
        console.log(num(7,2));
    } else {
        console.log(typeof arr2[i]);
    }
}

/* third task */
