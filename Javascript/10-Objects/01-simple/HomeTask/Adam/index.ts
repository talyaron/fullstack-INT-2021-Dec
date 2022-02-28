interface main{
    Name:string
    lastName:string
    age:number
    job:string
    address:string
}

const friends: Array<main>=[{
    Name:`Adam`,
    lastName:`Epelbaum`,
    age:22,
    job:`barista`,
    address:`Zoran`,
},
{
    Name:`Ori`,
    lastName:`Neuman`,
    age:22,
    job:`Cooking`,
    address:`Zoran`,
},
{

    Name:`Shai`,
    lastName:`Zilbershatz`,
    age:23,
    job:`Sales`,
    address:`Nizaney Oz`,
},
{
    Name:`Ben`,
    lastName:`Balas`,
    age:29,
    job:`Software`,
    address:`Tel Mond`,
},
];

function Con(arr:Array<main>):string{
    let Add:string ='';
    arr.forEach(elm=> Add+= `${elm.address} `);
    return (`you have ${arr.length} friends and they live in ${Add}`);
}
console.log(Con(friends));