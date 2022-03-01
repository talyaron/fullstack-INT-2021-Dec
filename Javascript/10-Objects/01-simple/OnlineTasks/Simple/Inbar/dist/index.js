var Movie1 = {
    title: "14 Peaks",
    director: "Torquil Jones",
    yearOfPublication: "2021"
};
var Movie2 = {
    title: "The Alpinist",
    director: "Peter Mortimer and Nick Rosen",
    yearOfPublication: "2021"
};
var Movie3 = {
    title: "Moonfall",
    director: "Roland Emmerich",
    yearOfPublication: "2022"
};
function printmovie(movieobj) {
    return "Hi, the movie " + movieobj.title + " was directed by " + movieobj.director + " and released in " + movieobj.yearOfPublication;
}
var movie = printmovie(Movie1);
console.log(Movie1);
console.log(Movie2);
console.log(Movie3);
//create 3 object of  movies
//each should hold "title", "director", "yearOfPublication"
