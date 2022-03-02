
interface Person {
    name:string,
    address:string,
    friends?:Array<string>,
}
const hanoch:Person = {
    name:"hanoch",
    address:"jerusalem",
    friends:["eli", "moshe", "chaim"]

}

const eli:Person ={
    name:"eli",
    address:"charish",
}
const moshe:Person ={
    name:"moshe",
    address:"jerusalem",
}
const chaim:Person ={
    name:"chaim",
    address:"heifa",
}

function lOfriends(count:number, friends:Array<Person>, key3:string ){
    let b:string = "" ;

    friends.map(k=>{
        b = b + " " + k[key3]
       
    })
    
    return(`i have ${count} friends and they leave in ${b}`)
}
const countOfFriends = hanoch.friends.length;
console.log(countOfFriends)
const arrayOfFriends:Array<Person> = [eli, moshe, chaim]
console.log(arrayOfFriends)
const friendsAddresses = lOfriends(countOfFriends,arrayOfFriends,'address');
console.log(friendsAddresses)