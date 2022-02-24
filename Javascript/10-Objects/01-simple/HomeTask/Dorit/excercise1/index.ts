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


//the function gets a Friend and returns the addresses of his friends as an array
function findFriends(myFriend:Friend):Array<string>{
    let arrayFr:Array<string> = []
    //the Friend we got as element has an array of friends and every friend in the array has an address
    //we push to the array named arrayFr only the address of every friend
    myFriend["friends"].forEach(element=>{
        arrayFr.push(element["address"])
    } )   
    return arrayFr;
}
let noFriends:number = findFriends(doritGuy).length//number of friends = length of the array in return
console.log(`you have ${noFriends} friends at ${findFriends(doritGuy)}`)



