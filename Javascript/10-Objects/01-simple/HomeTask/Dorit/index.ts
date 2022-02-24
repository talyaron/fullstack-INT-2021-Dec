interface Friend  {
    firstName:string,
    lastName:string,
    address:string,
    friends:Array<Friend>
}

let adir:Friend = {
    firstName:"Mordechai",
    lastName:"Gilat",
    address:"Jerusalem",
    friends:[sara, aviv]   
}

const mordechai:Friend = {
    firstName:"Mordechai",
    lastName:"Gilat",
    address:"Givataim",
    friends:[adir, galit]
} 

const aviv:Friend = {
    firstName:"Aviv",
    lastName:"Gordon",
    address:"Ramat Gan",
    friends:[adir, galit]
    }
const galit:Friend = {
    firstName:"Mordechai",
    lastName:"Gilat",
    address:"Tel Aviv",
    friends:[sara, adir]
}

const sara:Friend = {
    firstName:"Sara",
    lastName:"Yogev",
    address:"Kfar Saba",
    friends:[adir, galit]
    }
     


const doritGuy:Friend = {
    firstName:"Dorit",
    lastName:"Guy",
    address:"Hod Hasharon",
    friends:[sara, aviv, mordechai]
    }



function findFriends(myFriend:Friend):Array<string>{
    let arrayFr:Array<string> = []
    myFriend["friends"].forEach(element=>{
        arrayFr.push(element["address"])
    } )   
    return arrayFr;
}
let noFriends:number = findFriends(doritGuy).length
console.log(`you have ${noFriends} friends at ${findFriends(doritGuy)}`)