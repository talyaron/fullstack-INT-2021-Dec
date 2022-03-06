
// בנו אוביקט המתאר אתכם (שם, משפחה, מקום מגורים וכיוב׳)
// בתוך האוביקט, בנו מערך של חברים (רמז 1). כל אוביקט של חבר, צריך להיות מאותו סוג שלכם. השתמשו ב-interface כדי להבטיח זאת.
// בנו פונקציה שמקבלת אוביקט כזה, וכותבת ״you have X frinds and they live in address1, address2, address3 etc..
// אתגר: בנו פונקציה שמייצרת אוביקט כזה. לאחר מכן, נסו לכתוב את אותו הדבר באמצעות class (דורש קריאה באינטרנט).

interface person{
    name:string
    lastName: string
    age: number
    city:string
}

const evgeny:person ={
    name: 'evgeny',
    lastName:'ushakov',
    age: 27,
    city: 'rehovot',
};

const diana:person ={
    name: 'diana',
    lastName:'vor',
    age: 24,
    city: 'herzeliya',
};
const max:person ={
    name: 'max',
    lastName:'nago',
    age: 5,
    city: 'bat-yam',
};
const alex:person ={
    name: 'alex',
    lastName:'rasta',
    age: 26,
    city: 'sin-city',
};

var myfriends:Array<person> = [evgeny,diana,max,alex];
 

    
    // console.log('you have' myfriends.length 'frinds and they live in' myfriends)
