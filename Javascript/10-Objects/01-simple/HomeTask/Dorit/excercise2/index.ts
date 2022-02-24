class Friend {
    constructor(firstName:string, lastName:string, address:string, friends:Array<Friend>) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.friends = friends
    }

      
  }

let doritGuy = new Friend("Dorit","Guy","Hod hasharon",[sara,adi]) 