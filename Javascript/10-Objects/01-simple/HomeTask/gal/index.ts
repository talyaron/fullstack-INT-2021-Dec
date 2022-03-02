interface person{
    firstName:string,
    lastNmae:string,
    address:string,
    age:number,
}

const shahar:person={
    firstName:"Shahar",
    lastNmae:"Abu",
    address:"Harish",
    age: 24,
}

const ofek:person={
    firstName:"Ofek",
    lastNmae:"Sery",
    address:"Ramat-Gan",
    age: 28,
}

const yam:person={
    firstName:"Yam",
    lastNmae:"Rafaeli",
    address:"Natanya",
    age: 23,
}

const rotem:person={
    firstName:"Rotem",
    lastNmae:"Fishler",
    address:"Tel-Aviv",
    age: 23,
}

const kobe:person={
    firstName:"Kobe",
    lastNmae:"Font",
    address:"Eilat (myHomeTown)",
    age: 24,
}

const friendsArr:Array<person>=[shahar,yam,ofek,rotem,kobe];
console.log (friendsArr)

function randomFriend(arr:Array<person>):string{
    let add:string=``;
    arr.forEach (elm=> add+=`${elm.address},`);
    return (`You have ${arr.length} friends and they live in ${add}`);
}

console.log (randomFriend(friendsArr))

