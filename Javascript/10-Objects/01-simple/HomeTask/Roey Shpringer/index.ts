

interface friends  {
    firstName: string,
    lastName: string,
    adress: string,
    age: number
}

let friendOne:friends = {
    firstName: 'Ziv',
    lastName: 'Morgan',
    adress: 'Tel Mond',
    age : 19
}

let friendTwo:friends = {
    firstName: 'Or',
    lastName: 'Oren',
    adress: 'Hulon',
    age : 20
}

let friendThree:friends = {
    firstName: 'Eve',
    lastName: 'Idk',
    adress: 'Eilat',
    age : 23
}


let friendsArray = [friendOne, friendTwo, friendThree];

function friendsAdress(array:Array<friends>, name:string, adress:string){
    let friendsAmount = array.length;
    console.log(`you have ${friendsAmount} friends`)
    array.forEach(object =>
        console.log(`${object[name]} lives in ${object[adress]}`))
}

friendsAdress(friendsArray, 'firstName', 'adress')