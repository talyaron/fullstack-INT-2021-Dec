


interface Person {
    firstName: string,
    lastName: string,
    adress: string,
    age: number,
    frinds: Array<Person>
}

let friend_1: Person = {
    firstName: 'Eli',
    lastName: 'Choen',
    adress: 'Rozenblom 3/1 BeerShba',
    age: 28,
    frinds: []
}

let friend_2: Person = {
    firstName: 'Dana',
    lastName: 'Danon',
    adress: 'grossman 25 BeerShba',
    age: 29,
    frinds: []
}

let friend_3: Person = {
    firstName: 'Rotem',
    lastName: 'Amos',
    adress: 'Rotshild Tel Aviv',
    age: 29,
    frinds: []
}

let me: Person = {
    firstName: 'Yakir',
    lastName: 'DVir',
    adress: 'Grossman BeerShba',
    age: 29,
    frinds: [friend_1, friend_2, friend_3]
}


let friendsArray:Array<any> = [friend_1, friend_2, friend_3];

function friendsPrint(array: Array<Person>) {
    let friendsCount = array.length;
    console.log(`you have ${friendsCount} friends`)
    array.forEach(object =>
        console.log(`${object.firstName} lives in ${object.adress}`))
}

friendsPrint(friendsArray);



