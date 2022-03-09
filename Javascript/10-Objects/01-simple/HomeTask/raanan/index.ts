interface Profile {
    name: string;
    age: number;
    hobby: string;
}

interface MyProfile extends Profile{
    friends:Array<Profile>
}

const yarden:Profile = {
    name: "Yarden",
    age: 25,
    hobby: "Running"
}

const eyal:Profile = {
    name: "Eyal",
    age: 25,
    hobby: "Fishing"
}

const michal:Profile = {
    name: "Michal",
    age: 23,
    hobby: "Laphing"
}

const myFriends = {

}

const me:MyProfile = {
    name: "Raanan",
    age: 26,
    hobby: "Diving",
    friends:[yarden, eyal, michal]
}

//Function to return amount of friends
const friendsAmount = (profileObject:MyProfile):number => {
    return (profileObject.friends.length)
}

//Function to return friends hobbies
const friendsHobbies = (profileObject:MyProfile):Array<string> => {
    const friendsArray = profileObject.friends
    const friendsHobbies = [];
    for(let i = 0; i < friendsArray.length; i++){
        friendsHobbies.push(friendsArray[i].hobby)
    }
    return (friendsHobbies)
}

//Function to print info
const printInfo = (profileObject:MyProfile):void => {
    console.log(`I have ${friendsAmount(profileObject)} and thier hobbies are ${friendsHobbies(profileObject)}`)
}