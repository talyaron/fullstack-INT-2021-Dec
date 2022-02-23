var movie1 = {
    name: 'Harry Potter and the Philosophers Stone',
    director: 'Chris Columbus',
    year: '2001'
};
var movie2 = {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    director: 'Peter Jackson',
    year: '2001'
};
var movie3 = {
    name: '300',
    director: 'Zack Snyder',
    year: '2006'
};
function print(movie) {
    return "Movie title " + movie.name + " directed by " + movie.director + " in " + movie.year;
}
console.log(print(movie1));
console.log(print(movie2));
console.log(print(movie3));
var movie = [
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
for (var i = 0; i < movie.length; i++) {
    var temp = movie[i];
    console.log(print(temp));
}
