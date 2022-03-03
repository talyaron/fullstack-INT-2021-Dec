interface resume{
    name : string,
    lastName: string,
    address : string,
    age : number
};

const avi:resume = {
    name : 'Avi',
    lastName: 'Tsasashvili',
    address : 'Beer-Sheba',
    age : 28
}
const shoham:resume = {
    name : 'Shoham',
    lastName : 'Hania',
    address : 'Haifa',
    age : 27    
}
const aviel:resume = {
    name : 'Aviel',
    lastName : 'Avitan',
    address : 'Eilat',
    age : 26  
}
const nati:resume = {
    name : 'Nati',
    lastName : 'Benzaki',
    address : 'Beer-Sheba',
    age : 29  
}
const alon:resume = {
    name : 'Alon',
    lastName : 'Shnider',
    address : 'Arad',
    age : 26  
}
const friend = {
    friendsName : [shoham.name,aviel.name,nati.name,alon.name],
    friendsLastName : [shoham.lastName,aviel.lastName,nati.lastName,alon.lastName],
    friendsAddress : [shoham.address,aviel.address,nati.address,alon.address],
    friendsAge : [shoham.age,aviel.age,nati.age,alon.age]
}

function getFriends(arrayOfFriends:Array<any>){
    return `You have ${arrayOfFriends.length} and they live in ${arrayOfFriends}`
};

console.log(getFriends(friend['friendsAddress']))

