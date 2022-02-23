const movie1 = {
    name: 'Harry Potter and the Philosophers Stone',
    director: 'Chris Columbus',
    year: '2001'
};
const movie2 = {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    year: '2001'
};
const movie3 = {
    name: '300',
    director: 'Zack Snyder',
    year: '2006'
};

function print(movie) {
    return `Movie title ${movie.name} directed by ${movie.director} in ${movie.year}`;
}

// console.log(print(movie1));
// console.log(print(movie2));
// console.log(print(movie3));

const movie = [
    {
        name: '300',
        director: 'Zack Snyder',
        year: '2006'
    },
    {
        name: 'The Lord of the Rings: The Fellowship of the Ring',
        director: 'Peter Jackson',
        year: '2001'
    },
    {
        name: 'Harry Potter and the Philosophers Stone',
        director: 'Chris Columbus',
        year: '2001'
    }
];


// for (let i=0;i<movie.length;i++){
//     console.log(print(movie[i]));
// }
movie.forEach(movie=>{
    console.log(print(movie))
})