

interface person {
    name: string,
    lastName: string,
    age: number,
    catLover: boolean,
    hobbies: string
}

const me:person = {
    name: "Bella",
    lastName: "Brail",
    age: 27,
    catLover: true,
    hobbies: "draw, listen to music, travel" 
};

const Tomer:person = {
    name: "Tomer",
    lastName: "Ben Jonathan",
    age: 32,
    catLover: true,
    hobbies: "sports, travel" 
};

const Ofrit:person = {
    name: "Ofrit",
    lastName: "Assaf",
    age: 27,
    catLover: true,
    hobbies: "read books, listen to music, drink wine" 
};

const Gur:person = {
    name: "Gur",
    lastName: "Yehuda",
    age: 28,
    catLover: true,
    hobbies: "travel, listen to music, cook" 
};

const friends = [Tomer,Ofrit,Gur];
console.log(friends);

function countFriends (friends){
    const allFriends = friends.length
    return allFriends;
}

function friendsAge(a, b) {
    const ages = []
    a.forEach(element => { 
        ages.push(element[b])
    });
    return ages
}

const friendsByNum:number = countFriends(friends)
console.log (friendsByNum)

const age = friendsAge(friends,"age")

// Log Outcome
 console.log (`I have ${friendsByNum} friends and their ages are ${age}`);

