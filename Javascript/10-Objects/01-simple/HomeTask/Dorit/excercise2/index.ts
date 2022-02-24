class Friend {
    constructor(firstName:string, lastName:string, address:string, friends:Array<Friend>) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.friends = friends
    }
    printName(){
      return this.firstName;
    }
    //printFriends() {
      //let frArray = []
      //this.friends.forEach(element => {
      //  frArray.push(element["this.address"])
      //  console.log(frArray)
     // });
      //return frArray;
  }
      
}

let sara = new Friend("Sara","Yogev","Tel Aviv",[doritGuy,adi])
let adi = new Friend("Adi","Manor","Jerisalem",[doritGuy,sara]) 
let doritGuy = new Friend("Dorit","Guy","Hod hasharon",[sara,adi])
console.log(doritGuy)

//let array = doritGuy.printFriends()

