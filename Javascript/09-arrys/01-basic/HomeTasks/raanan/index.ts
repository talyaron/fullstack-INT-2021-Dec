console.log('hi')


const listOfFriends:Array<string>=['Ron', 'Eyal', 'Tom'];
for (let i = 0; i < listOfFriends.length; i++){
    console.log(`Hello ${listOfFriends[i]}`);
}


const listOfNumbers:Array<number>=[1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < listOfNumbers.length; i++){
    if (listOfNumbers[i]>5)console.log(`the ${listOfNumbers[i]} is bigger than 5`);
}

const listOfAny:Array<any>=[1,2,'hello','bey',true,false,myFunc];
for (let i = 0; i < listOfAny.length; i++){
    console.log(typeof listOfAny[i])
    if (typeof listOfAny[i] === 'function') listOfAny[i]()
}
function myFunc(){
    console.log('it worked')
}

const avrageOfNumbers:Array<number>=[1,2,3,4,5,6,7,8,9];
for (let i = 0; i < avrageOfNumbers.length; i++){
    total+= avrageOfNumbers[i]
}
console.log(total/avrageOfNumbers.length);
