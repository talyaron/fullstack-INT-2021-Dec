interface PersonDetails {
    name: string,
    lastName: string,
    address: string,
    job: string,
}


const MyDetails: PersonDetails = {
    name: "Hadeer",
    lastName: "HAbiballah",
    address: "Tira",
    job: "Tissue Typing LAB",
}


const Mustafa: PersonDetails = {
    name: "Mustafa",
    lastName: "Qassim",
    address: "Tira",
    job: "Blood Bank Lab",
}

const Rula: PersonDetails = {
    name: "Rula",
    lastName: "Mansour",
    address: "Haifa",
    job: "Teacher",
}


const Abeer: PersonDetails = {
    name: "Abeer",
    lastName: "Dabbah",
    address: "Maker",
    job: "Nurse",
}



const Rana: PersonDetails = {
    name: "Rana",
    lastName: "Khamisey",
    address: "Ako",
    job: "Enviroment",
}

function FriendsDetails(arrayOfFriends: Array<PersonDetails>) {
    for (let i = 0; i++; i < arrayOfFriends.length) {
        arrayOfFriends.forEach(PersonDetails => {
            return `Your name ${MyDetails.name} you have ${arrayOfFriends.length} friends and they live in ${PersonDetails.address}`;
        })

    }
}

const Myfriends: Array<PersonDetails> = [Mustafa, Rula, Abeer, Rana];
const FriendLocation = FriendsDetails(Myfriends);
console.log(FriendLocation);



