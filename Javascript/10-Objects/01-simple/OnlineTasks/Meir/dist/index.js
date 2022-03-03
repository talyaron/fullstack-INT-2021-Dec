var movie1 = {
    title: "Back to the future",
    director: "Robert Zamkis",
    yearOfPublication: "1985"
};
var movie2 = {
    title: "Matrix",
    director: "The Wachowskis",
    yearOfPublication: "1999"
};
var movie3 = {
    title: "Stars Wars",
    director: "George Lucas",
    yearOfPublication: "1977"
};
function Movie(movieObj) {
    return "the movie is" + movieObj.title + " by director" + movieObj.director + " in" + movieObj.yearOfPublication;
}
var netflix = Movie(movie1);
console.log(movie1);
var netflix = Movie(movie2);
console.log(movie2);
var netflix = Movie(movie3);
console.log(movie3);
