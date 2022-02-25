interface Friend  {
    firstName:string,
    lastName:string,
    address:string,
    friends:Array<Friend>
}

function makeFriends(){
    try{
        let randomized:number = 0
        
        arrayOfPersons.forEach(element=>{
            randomized = Math.floor(Math.random()*arrayOfPersons.length)
            //console.log(`randomize ${randomized}`)
            element.friends.pop
            element['friends'].push(arrayOfPersons[randomized])
            randomized = Math.floor(Math.random()*arrayOfPersons.length)
            //console.log(`randomize ${randomized}`)
            element.friends.pop
            element['friends'].push(arrayOfPersons[randomized])
            randomized = Math.floor(Math.random()*arrayOfPersons.length)
            //console.log(`randomize ${randomized}`)
            element.friends.pop
            element['friends'].push(arrayOfPersons[randomized])
        })
    return true
}catch{
    return false
}
}

function findFriends(myFriend:Friend):Array<string>{
    let arrayFr:Array<string> = []
    //the Friend we got as element has an array of friends and every friend in the array has an address
    //we push to the array named arrayFr only the address of every friend
    myFriend["friends"].forEach(element=>{
        arrayFr.push(element["address"])
    } )   
    return arrayFr;
}




let adir:Friend = {
    firstName:"Adir",
    lastName:"Givati",
    address:"Jerusalem",
    friends:[adir]   
}

let mordechai:Friend = {
    firstName:"Mordechai",
    lastName:"Gilat",
    address:"Givataim",
    friends:[adir]
} 

let aviv:Friend = {
    firstName:"Aviv",
    lastName:"Gordon",
    address:"Ramat Gan",
    friends:[mordechai]
    }
let galit:Friend = {
    firstName:"Mordechai",
    lastName:"Gilat",
    address:"Tel Aviv",
    friends:[aviv]
}

let sara:Friend = {
    firstName:"Sara",
    lastName:"Yogev",
    address:"Kfar Saba",
    friends:[galit]
    }

let doritGuy:Friend = {
    firstName:"Dorit",
    lastName:"Guy",
    address:"Hod Hasharon",
    friends:[sara]
    }

let arrayOfPersons:Array<Friend> = [
    adir, mordechai,aviv,galit,sara,doritGuy]
   

let success:boolean = makeFriends()
if (!success){
    alert("something got wrong, no results")
} else{

       console.log("everything ok")

    //the function gets a Friend and returns the addresses of his friends as an array

    let noFriends:number = findFriends(galit).length//number of friends = length of the array in return
    console.log(`you have ${noFriends} friends at ${findFriends(doritGuy)}`)

}
