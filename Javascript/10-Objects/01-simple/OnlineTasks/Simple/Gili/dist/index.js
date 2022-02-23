console.log("hi");
var movie1 = {
    name: "How to train your dragon",
    director: "Chris Sanders",
    yearOfPublication: "2010"
};
var movie2 = {
    name: "Harry Potter and the Philosopher's Stone",
    director: "Chris Columbus",
    yearOfPublication: "2001"
};
var movie3 = {
    name: "Frozen",
    director: "Chris Buck",
    yearOfPublication: "2013"
};
function movieInfo(movie) {
    return "the movie " + movie.name + " was directed by " + movie.director + " at the year " + movie.yearOfPublication;
}
var info1 = movieInfo(movie1);
var info2 = movieInfo(movie2);
var info3 = movieInfo(movie3);
