const movie1 = {
    title: "Back to the future"
    director: "Robert Zamkis"
    yearOfPublication: "1985"
}

const movie2 = {
    title: "Matrix"
    director: "The Wachowskis"
    yearOfPublication: "1999"
}

const movie3 = {
    title: "Stars Wars"
    director: "George Lucas"
    yearOfPublication: "1977"
}

function Movie(movieObj){
    return`the movie is${movieObj.title} by director${movieObj.director} in${movieObj.yearOfPublication}`
}


const netflix = Movie(movie1);
console.log(movie1)

const netflix = Movie(movie2);
console.log(movie2)

const netflix = Movie(movie3);
console.log(movie3)