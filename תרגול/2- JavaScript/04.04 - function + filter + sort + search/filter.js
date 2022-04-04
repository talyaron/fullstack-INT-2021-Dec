//--------------------------bigger that X (obj>x)----------------//
console.log('OBJ > X')
let books = [{ title: 'book2', year: 2010 }, { title: 'book3', year: 1990 }, { title: 'book1', year: 1970 }, { title: 'book4', year: 2000 }]

let newBooks = books.filter(book => book.year > 1990) //צריך לעשות משתנה חדש שעליו נמשוך  את הנתונים
console.log(newBooks)


//------------------filter & sort by title----------------------//
console.log('FILTER & SORT by title')

let books2 = [{ title: 'book2', year: 2010 },
{ title: 'book3', year: 1990 },
{ title: 'book1', year: 1970 },
{ title: 'book4', year: 2000 },
{ title: 'book5', year: 1970 },
{ title: 'book6', year: 2002 }
]

let newBooks2 = books2.filter(book => book.year > 1990).sort((a, b) => { if (a.title < b.title) return -1; })
console.log(newBooks2)

//------------------filer & sort by year----------------//
console.log('FILTER & SORT by year')
let books3 = [{ title: 'book2', year: 2010 },
{ title: 'book3', year: 1990 },
{ title: 'book1', year: 1970 },
{ title: 'book4', year: 2000 },
{ title: 'book5', year: 1970 },
{ title: 'book6', year: 2002 }
]

let newBooks3 = books3.filter(book => book.year > 1990).sort((a, b) => a.year - b.year)
console.log(newBooks3)

//----------------------------------------------//
console.log('')

let books4 = [
    [
        { title: 'book2', year: 2010 },
        { title: 'book3', year: 1990 },
        { title: 'book1', year: 1970 },
        { title: 'book4', year: 2000 },
        { title: 'book5', year: 1970 },
        { title: 'book6', year: 2002 }
    ],
    [
        { title: 'book2', year: 2010 },
        { title: 'book3', year: 1990 },
        { title: 'book1', year: 1970 },
        { title: 'book4', year: 2000 },
        { title: 'book5', year: 1970 },
        { title: 'book6', year: 2002 }
    ]
]

let newBooks4 = books4[0].filter(book => book.year > 1990).sort((a, b) => a.year - b.year) //נכנס לאיריי שאנחנו צריכים
console.log(newBooks4)