class Profile{
    firstName:string
    lastName:string
    city:string
    address:string
    friends: Profile[]
    constructor(firstName, lastName, city, address, friends){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.address = address;
        this.friends = friends
    }
}
// This function creates a new Object with the class Profile
function createProfileObject (firstName:string, lastName:string, city:string, address:string, friends:Profile[]):Profile {
    const newProfile:Profile = new Profile (firstName, lastName, city, address, friends);
    return newProfile;
}

// This function returns array of adresses of the objects the object have
function friendsAddresses(userProfile:Profile[]):Array<string>{
    return userProfile.map(friendAdd => {return friendAdd.address})
}

// This function prints the information about object's friends
// 1. How many friends the object have
// 2. Where do the friends live
function printFriendsInformation (userProfile:Profile):void{
    console.log(`You have ${userProfile.friends.length} friends and they live in ${friendsAddresses(userProfile.friends)}`)
}

const daniel = createProfileObject('Daniel', 'Oronsi', 'Ashkelon', 'Gan-Havradim', [])
const roie = createProfileObject('Roie', 'Goldstien', 'Ashkelon', 'Barnea', [daniel])
const michael = createProfileObject('Micheal', 'Livshits', 'Ashkelon', 'Eli-Cohen', [daniel, roie])
const david = createProfileObject('David', 'Martinenko', 'Ashkelon', 'Afridar', [daniel, roie, michael])
const lior =createProfileObject('Lior', 'Grishin', 'Ashkelon', 'Neot-Ashkelon', [daniel,roie, michael, david])