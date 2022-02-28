interface Personal {
    firstName: string,
    lastName: string,
    address: string,
    age: string,
    status: number,
}

const Lital: Personal = {
    firstName: "Lital",
    lastName: "Cohen",
    address: "Petah-Tikva",
    age: "23",
    status: 0,
}
const May: Personal = {
    firstName: "May",
    lastName: "Menashe",
    address: "Tel-Aviv",
    age: "23",
    status: 1,
};

const Ben: Personal = {
    firstName: "Ben",
    lastName: "Silver",
    address: "Ashkelon",
    age: "24",
    status: 2,
};

const Lou: Personal = {
    firstName: "Lou",
    lastName: "Dionas",
    address: "LA",
    age: "24",
    status: 3,

};

const Ran: Personal = {
    firstName: "Ran",
    lastName: "Tily",
    address: "Bat-Yam",
    age: "24",
    status: 4,

};

const arrayOfFriends: Array<Personal> = [May, Ben, Lou, Ran];

function sayMyFriends(arrayOfFriends: Array<Personal>, address: string) {
    arrayOfFriends.forEach(friend => {
        console.log(friend[address]);

    })
}
const myFriends: Array<Personal> = [May, Ben, Lou, Ran];
const count = myFriends.filter(item => item.status > 0).length;
// console.log(count)
console.log(`You have ${count} friends and they live in:`)
sayMyFriends(myFriends, "address");

//challenge

class NewFriendPersonal {
    firstName: string
    lastName: string
    address: string
    age: string
    status: NewFriendPersonal[]

    constructor(firstName, lastName, address, age, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.age = age;
        this.status = status;
    }
}


function createNewFriend(firstName: string, lastName: string, address: string, age: string, status: NewFriendPersonal[]): NewFriendPersonal {
    const newFriend: NewFriendPersonal = new NewFriendPersonal(firstName, lastName, address, age, status);
    return newFriend
}
console.log(NewFriendPersonal)

const myNewFriend = createNewFriend("Ron", "Levi", "Jerusalem", "24", []);
console.log(myNewFriend)



