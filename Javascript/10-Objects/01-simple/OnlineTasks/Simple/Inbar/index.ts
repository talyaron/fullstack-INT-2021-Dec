const Movie1 = {
    title:"14 Peaks", 
    director:"Torquil Jones",
    yearOfPublication:"2021",
}

const Movie2 = {
    title:"The Alpinist", 
    director:"Peter Mortimer and Nick Rosen",
    yearOfPublication:"2021",
}

const Movie3 = {
    title:"Moonfall", 
    director:"Roland Emmerich",
    yearOfPublication:"2022",
}

function printmovie(movieobj){
    return `The movie ${movieobj.title} was directed by ${movieobj.director} and released in ${movieobj.yearOfPublication}`
}

const movie = printmovie(Movie1);

console.log(printmovie(Movie1))
console.log(printmovie(Movie2))
console.log(printmovie(Movie3))
            

//create 3 object of  movies
//each should hold "title", "director", "yearOfPublication"