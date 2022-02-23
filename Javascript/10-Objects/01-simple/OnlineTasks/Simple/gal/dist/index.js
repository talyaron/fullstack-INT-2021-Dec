var movie1 = {
    title: "Wanderer Land",
    director: "Cloei zao",
    yearOfPublication: "2020"
};
var movie2 = {
    title: "The Matrix",
    director: "The LaLa Sisters",
    yearOfPublication: "1999"
};
var movie3 = {
    title: "Titan",
    director: "Julie Docorano ",
    yearOfPublication: "2021"
};
function movieID(movies) {
    return "The movie " + movies.title + " by " + movies.director + " was published in " + movies.yearOfPublication;
}
console.log(movieID(movie1));
console.log(movieID(movie2));
console.log(movieID(movie3));
