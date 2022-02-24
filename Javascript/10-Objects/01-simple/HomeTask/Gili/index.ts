

// EX - Friends
interface Friend {
    firstName: string,
    lastName: string,
    address: string
}

// Friends Objects
const me = {
    firstName: "Gili",
    lastName:"Menahem",
    address:"Moshav Shafir"
}

const friend1:Friend = {
    firstName: "Benjamin",
    lastName:"Kudlis",
    address:"Ashdod"
}

const friend2:Friend = {
    firstName: "Roni",
    lastName:"Menahem",
    address:"Hertzlya"
}

const friend3:Friend = {
    firstName: "Almog",
    lastName:"Karabelnik",
    address:"Ramat-Gan"
}

const friend4:Friend = {
    firstName: "Sayfan",
    lastName:"Lissak",
    address:"Ramat-Gan"
}

// Friends Array
const friendArr = [friend1, friend2, friend3, friend4]

//Friends Counter Function
function friendCounter(arr:Array<any>) {
const friendsAmount = arr.length
return friendsAmount
}
// Friends Location extracter to new array
function friendsLocation(arr, key1) {
    const numbersByKeys = []
    arr.forEach(element => { 
        numbersByKeys.push(element[key1])
    });
    return numbersByKeys
}

// Getting spesific friends number
const friendsNum:number = friendCounter(friendArr)

// Getting spesific friends locations
const friendsLoc = friendsLocation(friendArr,"address")

// Log Outcome
console.log(`You have ${friendsNum} friends, and they live at: ${friendsLoc}`)
