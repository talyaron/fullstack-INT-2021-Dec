
const greatMovie = {
    nameOfMovie: "Pulp Fiction",
    releaseDate: "1994",
    filmGenres: "Crime/Drama",
    writtenBy: "Quentin Tarantino"
}

function favMovie (movieObj) {
    return `My Favorite movie is ${movieObj.nameOfMovie}. ${movieObj.filmGenres} - written by ${movieObj.writtenBy} in ${movieObj.releaseDate}.`
}

const movie = favMovie (greatMovie)
console.log(movie)