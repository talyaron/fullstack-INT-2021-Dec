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

function printmovie(pesonObj){
    return `Hi, the movie ${pesonObj.title} was directed by ${pesonObj.director} and released in ${pesonObj.yearOfPublication}`
}

const movie = printmovie(Movie1);
console.log(movie)

//create 3 object of  movies
//each should hold "title", "director", "yearOfPublication"