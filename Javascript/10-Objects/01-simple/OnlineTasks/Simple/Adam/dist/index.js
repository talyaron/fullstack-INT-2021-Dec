var Queen = {
    MoviesName: "The Queen's Gambit",
    Director: "Scott Frank",
    yearOfPublication: "2020"
};
var Forrest = {
    MoviesName: "Forrest Gump",
    Director: "Robert Zemeckis",
    yearOfPublication: "1994"
};
var truman = {
    MoviesName: "The truman show",
    Director: "Peter Wier",
    yearOfPublication: "1998"
};
function Movie(Movieintro) {
    return " " + Movieintro.MoviesName + " " + Movieintro.Director + " " + Movieintro.yearOfPublication;
}
var movie1 = (Queen);
console.log(movie1);
var movie2 = (Forrest);
console.log(movie2);
var movie3 = (truman);
console.log(movie3);
