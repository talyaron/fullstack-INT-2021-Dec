const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function fun() {
    let x = 1;

    fun2(x)

    return fun2(x)
}

function fun2(x) {
    let y = x + x
    return y
}

console.log(fun())


/*
 Write a JavaScript program to construct the following pattern, using a nested for loop.
 *
 * *
 * * *
 * * * *
 * * * * *

 let string = '*';
 let i;
 let j;
*/

//SORT
