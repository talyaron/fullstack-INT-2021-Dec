// challenge

//אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).

class PD{
    firstName: string;
    lastName: string;
    address: string;
    constructor(firstName, lastName, address){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
    }
    
}

  let friendOne= new PD("roy","felhiemer","Tel-Aviv")
  let friendTwo= new PD("ari","man","LA")
  let friendThree= new PD("lev","ari","Holon")


  let friends:Array<PD>=[friendOne, friendTwo, friendThree ]

  const FriendsDeatails= (friends:Array<PD>):any =>{
    let b=` `;
    friends.forEach(elm=> b+= `${elm.address} `)
      return `you have `+ friends.length+ ` friends and they live in ` + b
  }
  console.log(FriendsDeatails(friends))
