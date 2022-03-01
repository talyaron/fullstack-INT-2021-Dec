class Friend {
    constructor(firstName:string, lastName:string, address:string, friends:Array<Friend>) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.friends = friends
   }
    printFriends(){
      let array:Array<string> = []
      this.friends.forEach(element => {
       array.push(element.address) 
      });
      return array
      
    }
}

let sarit = new Friend("Sara","Yogev","Tel Aviv",[])
let adi = new Friend("Adi","Manor","Jerisalem",[sarit]) 
let dorit = new Friend("Dorit","Guy","Hod hasharon",[sarit,adi])
let yaffa = new Friend("Yaffa", "gafu", "Ramat Hasharon",[sarit,adi,dorit])
let juda = new Friend("Juda","Yaakobi","Herzlia",[sarit,adi,dorit,yaffa])
sarit['friends'].push(adi,dorit)
console.log(sarit.printFriends())



