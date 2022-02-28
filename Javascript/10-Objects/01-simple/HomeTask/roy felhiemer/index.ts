interface PD{
    Name:string,
    LastName: string,
    Address:string,
};


let friendOne: PD={
    Name: `roy`,
    LastName: `felhiemer`,
    Address: `tel-aviv`,

};
let friendTwo:PD = {
    Name: 'yossi',
    LastName: 'sillam',
    Address: 'natanya',
    
}

let friendThree:PD = {
    Name: 'rachel',
    LastName: 'levi',
    Address: 'modiin',
   
}

let friends:Array<PD>=[friendOne, friendTwo, friendThree ]



    
    
const FriendsDeatails= (friends:Array<PD>, a):any =>{
  let b=` `;
  friends.forEach(elm=> b+= `${elm.Address} `)
    return `you have `+ a+ ` friends and they live in ` + b
}
console.log(FriendsDeatails(friends,friends.length))

// challenge

//אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).


