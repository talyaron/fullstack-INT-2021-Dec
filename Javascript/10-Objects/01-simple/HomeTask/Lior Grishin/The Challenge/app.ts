interface Person {
    firstName:string
    lastName:string
    city:string
    address:string 
}

const daniel:Person = {
    firstName: 'Daniel',
    lastName: 'Oronsi',
    city: 'Ashkelon',
    address: 'Gan-Havradim',
}

const me = Object.create(daniel)

console.log(me)
