//1+2   Welcome my friends 

const friends: Array<string> = ['Ron', 'Ido', 'Adam', 'Emma'];
for (var i = 0; i < friends.length; i++) {
    console.log(`welcome ${friends[i]}`)
}

//3    Bigger then five array

const numbers: Array<number> = [1, 6, 8, 2, 4, 3, 4];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        console.log(`the number ${numbers[i]} is bigger then 5`)
    }
    else {
        console.log(`The number ${numbers[i]} is not bigger to 5`)
    }
}


//4    TypeOf for



const things: Array<any> = [1, 8, 'box', 'yoyo', 3, 77, plus(5,4)]
for (var i = 0; i < things.length; i++) {
    if things[i] == function() {
        console.log(`it is a function, ` plus)
    }
    else {
        console.log(`the type of ${things[i]} is` ,typeof(things[i]))

    }
}


function plus(a:number, b:number) {
return a+b;
}