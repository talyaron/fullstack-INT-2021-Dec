
interface Person{
    name:string,
    lastName:string,
    city:string,
   
}

interface me extends Person{
    friends:Array<Person>
}



const Dudu:Person ={
    name:'Dudu',
    lastName: 'Ezra',
    city: 'Ashqelon',
}

const Eli:Person ={
    name:'Eli',
    lastName: 'Maman',
    city: 'Ashdod',
}

const David:Person ={
    name:'David',
    lastName: 'Ben david',
    city: 'Holon',
}


const juda:me ={
    name:'Juda',
    lastName: 'Golan',
    city: 'Azor',
    friends: [Dudu, Eli, David]
    }

function yourFriends(name){

    console.log(`You have ${juda.friends.length} friends and they live in ${Dudu.city}, ${Eli.city} and ${David.city}`)
}

yourFriends(juda)