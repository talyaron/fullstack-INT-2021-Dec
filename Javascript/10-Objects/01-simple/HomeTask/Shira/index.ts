// Decleration
interface Person  {
    name: string,
    lastName: string,
    age: number,
    address: string,
    hobby: string,
    friends: Person[]
}

// Friends
let hodaya: Person ={
    name:"Hodaya",
    lastName: "Cohen",
    age: 20,
    address: "Jerusalem",
    hobby: "Draw",
    friends:[]
}

let tohar: Person ={
    name:"Tohar",
    lastName: "Gold",
    age: 22,
    address: "Afula",
    hobby: "Sing",
    friends:[]
}

let shilat: Person ={
    name:"Shilat",
    lastName: "Ben Shitrit",
    age: 20,
    address: "Tel-Aviv",
    hobby: "Sport",
    friends:[hodaya, tohar]
}

// Me
let shira: Person = {
    name:"Shira",
    lastName: "Amar",
    age: 20.5,
    address: "Netivot",
    hobby: "Music",
    friends: [hodaya, tohar, shilat]
};

function friendsAddresses(friends:Person[]){
    return friends.map(friend => {return friend.address})
}

function myFriends(person: Person){
    console.log(`You have ${person.friends.length} friends , and they live in: ${friendsAddresses(person.friends)}`)
}

myFriends(shira)


// Challenge:
function createPerson(name:string, lastName:string, age:number, address:string, hobby:string, friends:Person[]){
    let newPerson: Person = {
        name: name,
        lastName: lastName,
        age: age,
        address: address,
        hobby: hobby,
        friends: friends
    };
    return newPerson
}

let shira_challenge = createPerson("Noy","Levi", 21.5, "Tel-Aviv", "Music",[hodaya, shilat])
myFriends(shira_challenge)

// Create using class
class PersonClass implements Person{
    name: string;
    lastName: string;
    age: number;
    address: string;
    hobby: string;
    friends: Person[];

    constructor(name:string, lastName:string, age:number, address:string, hobby:string, friends:Person[]){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
        this.hobby = hobby;
        this.friends = friends;
    }
    
}

let personIns = new PersonClass("Noy","Levi", 21.5, "Tel-Aviv", "Music",[hodaya, shilat])
personIns.friends.push(shira)
myFriends(personIns)