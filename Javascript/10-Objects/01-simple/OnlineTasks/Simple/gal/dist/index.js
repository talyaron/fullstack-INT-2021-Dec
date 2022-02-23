var movies = {
    title: "wanderer land",
    director: "cloei zao",
    yearOfPublication: "2020"
};
function movieID(movies) {
    return "The movie " + movies.title + " by " + movies.director + " was published in " + movies.yearOfPublication;
}
var movie = movieID(movies);
console.log(movie);
