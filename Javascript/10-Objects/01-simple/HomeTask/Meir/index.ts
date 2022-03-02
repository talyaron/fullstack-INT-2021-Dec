// אוביקטים
// בנו אוביקט המתאר אתכם (שם, משפחה, מקום מגורים וכיוב׳)
// בתוך האוביקט, בנו מערך של חברים (רמז 1). כל אוביקט של חבר, צריך להיות מאותו סוג שלכם. השתמשו ב-interface כדי להבטיח זאת.
// בנו פונקציה שמקבלת אוביקט כזה, וכותבת ״you have X frinds and they live in address1, address2, address3 etc..
// אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).


// רמזים:

// key friends, value array


interface friends{
    name:string,
    lastName:string,
    address:string,
    age:number,
}

const me:friends = {
    name:"meir duvid",
    lastName:"krykun",
    address:"kriat malaji",
    age:45,  
}

const friend1:friends = {
    name:"ofer",
    lastName:"kohan",
    address:"netania",
    age:42,
}

const friend2:friends = {
    name:"shlomo",
    lastName:"gatenio",
    address:"Beitar",
    age:41,     
}

const friend3:friends = {
    name:"meir shlomo",
    lastName:"kreinin",
    address:"petaj tikva",
    age:45,
}

const friend4:friends = {
    name:"ari", 
    lastName:"avad", 
    address:"raanana", 
    age:40,
}

const friendsArr:Array<bestFriends> = [friend1,friend2,friend3,friend4]

function myFriends(friendsArr:Array<myFriends>):string{
    let add:string=` `;
    friendsArr.forEach ((elm)=> add +=`${elm.address} `);
    return (`You have ${friendsArr.length} friends and they live at${add} !!!`) ;
}

console.log (myFriends(friendsArr))
