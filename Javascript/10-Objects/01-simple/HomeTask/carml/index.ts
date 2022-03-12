interface person{
    name:string,
    lastname:string,
    age:number,
    address:string,
    friends:Array<person>
}

const friendone:person={
    name: "Paola",
    lastname: "Gay",
    age:20,
    address: "paris, france",
    friends:[]
}
const friendtwo:person={
    name: "Csenge",
    lastname: "IDONTKNOW",
    age:21,
    address: "via ormea 12 torino italy",
    friends:[]
}
const friendthree:person={
    name: "Hadar",
    lastname: "Hartzvi",
    age:24,
    address: "jerusalem",
    friends:[]
}
const friendfour:person={
    name: "Maya",
    lastname: "Benbasat",
    age:24,
    address: "israel",
    friends:[]
}
const friendfive:person={
    name: "Noa",
    lastname: "Smashimish",
    age:23,
    address: "salzberg",
    friends:[]
}
const me:person ={
    name: "carmel",
    lastname: "Bar",
    age:23,
    address: "via ormea 12 torino italy",
    friends:[
        friendone,
        friendtwo,
        friendthree,
        friendfour,
        friendfive
    ]
}

function whereAreMyFriends(person) {
    let allAddress:string=""
    person.friends.forEach(element => {
        allAddress+= element.address+`, `
    });
    if (person.friends.length==1)
    {
        return  `you have one friend and they live in ${allAddress}`
    }
    else{
        return `you have ${person.friends.length} friends and they live in ${allAddress}`
    }
}

const hereTheyAre= whereAreMyFriends(me)
console.log(hereTheyAre)


function buildAFriend(name:string, lastname:string, age:number, address:string, friends:Array<any>):person{
    const newfriend:person={
        name:name,
        lastname:lastname,
        age:age,
        address:address,
        friends:friends
    }
    return newfriend
}

const newname:string=window.prompt("who is this?")
const newlastname:string=window.prompt("who??")
const newage:number=parseInt(window.prompt("and how old are they?"))
const newaddress:string= window.prompt("what?? that old??? where do they live???")
const newfriends:Array<any>=[]

const newestfriend =buildAFriend(newname, newlastname, newage, newaddress, newfriends)
me.friends.push(newestfriend)
console.log(newestfriend)
const hereTheyAreAgain= whereAreMyFriends(me)
console.log(hereTheyAreAgain)
