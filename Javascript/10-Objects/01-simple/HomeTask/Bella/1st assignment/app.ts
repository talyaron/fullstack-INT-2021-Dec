
// אוביקטים
// בנו אוביקט המתאר אתכם (שם, משפחה, מקום מגורים וכיוב׳)
// בתוך האוביקט, בנו מערך של חברים (רמז 1). כל אוביקט של חבר, צריך להיות מאותו סוג שלכם. השתמשו ב-interface כדי להבטיח זאת.
// בנו פונקציה שמקבלת אוביקט כזה, וכותבת ״you have X frinds and they live in address1, address2, address3 etc..
// אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).

interface person {
    name: string,
    lastName: string,
    age: number,
    catLover: boolean,
    hobbies: string
}

const me:person = {
    name: "Bella",
    lastName: "Brail",
    age: 27,
    catLover: true,
    hobbies: "draw, listen to music, travel" 
};

const Tomer:person = {
    name: "Tomer",
    lastName: "Ben Jonathan",
    age: 32,
    catLover: true,
    hobbies: "sports, travel" 
};

const Ofrit:person = {
    name: "Ofrit",
    lastName: "Assaf",
    age: 27,
    catLover: true,
    hobbies: "read books, listen to music, drink wine" 
};

const Gur:person = {
    name: "Gur",
    lastName: "Yehuda",
    age: 28,
    catLover: false,
    hobbies: "travel, listen to music, cook" 
};

const friends:Array<person> = [Tomer,Ofrit,Gur];
console.log(friends);

const myFriends = friends.map (elm=> {
    return `${me} have ${friends} frinds and they live in address1, address2, address3 etc`
});

