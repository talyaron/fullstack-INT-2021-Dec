interface myFriends{
    firstName:string,
    lastNmae:string,
    address:string,
    age:number,
}

const shahar:myFriends={
    firstName:"Shahar",
    lastNmae:"Abu",
    address:"Harish",
    age: 24,
}

const ofek:myFriends={
    firstName:"Ofek",
    lastNmae:"Sery",
    address:"Ramat-Gan",
    age: 28,
}

const yam:myFriends={
    firstName:"Yam",
    lastNmae:"Rafaeli",
    address:"Natanya",
    age: 23,
}

const rotem:myFriends={
    firstName:"Rotem",
    lastNmae:"Fishler",
    address:"Tel-Aviv",
    age: 23,
}

const kobe:myFriends={
    firstName:"Kobe",
    lastNmae:"Font",
    address:"Eilat (myHomeTown)",
    age: 24,
}

const friendsArr:Array<myFriends>=[shahar,yam,ofek,rotem,kobe];
console.log (friendsArr)

function randomFriend(arr:Array<myFriends>):string{
    let add:string=``;
    arr.forEach (elm=> add+=`${elm.address},`);
    return (`You have ${arr.length} friends and they live in ${add}`);
}

console.log (randomFriend(friendsArr))
