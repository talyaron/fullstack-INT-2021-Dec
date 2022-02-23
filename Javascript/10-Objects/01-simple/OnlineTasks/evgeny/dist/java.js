var movie1 = {
    title: 'avengers',
    director: 'bob bobson',
    yearOfPublication: '1948'
};
var movie2 = {
    title: 'good guy',
    director: 'guy good',
    yearOfPublication: '20BC'
};
var movie3 = {
    title: 'who let the dogs out',
    director: 'rap rapper',
    yearOfPublication: '2077'
};
function moviespecs(moviespec) {
    return "movie title' " + moviespec.title + " 'by director' " + moviespec.director + " 'from the year' " + moviespec.yearOfPublication;
}
var movie = moviespecs(movie1);
var movie22 = moviespecs(movie2);
var movie33 = moviespecs(movie3);
console.log(movie, movie22, movie33);
