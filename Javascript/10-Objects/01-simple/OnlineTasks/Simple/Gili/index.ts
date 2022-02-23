console.log(`hi`)

const movie1 = {
    name:"How to train your dragon",
    director:"Chris Sanders",
    yearOfPublication: "2010",
}

const movie2 = {
    name:"Harry Potter and the Philosopher's Stone",
    director:"Chris Columbus",
    yearOfPublication: "2001",
}

const movie3 = {
    name:"Frozen",
    director:"Chris Buck",
    yearOfPublication: "2013",
}

function movieInfo(movie) {
    return `the movie "${movie.name}" was directed by ${movie.director} at the year ${movie.yearOfPublication}`
}

const info1 = movieInfo(movie1)
const info2 = movieInfo(movie2)
const info3 = movieInfo(movie3)
console.log(info1)
console.log(info2)
console.log(info3)