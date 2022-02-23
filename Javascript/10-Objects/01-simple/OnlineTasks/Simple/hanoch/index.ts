const movie1 ={
    Name:"The Silence of the Lambs",
    director:"jonathan Demi",
    time:"1991",

}

const movie2 ={
    Name:"The matrix",
    director:"The Wachowskis sisters/brothers",
    time:"1999"
}

const movie3 = {
    Name:"The matrix 2",
    director:"The Wachowskis sisters/brothers",
    time:"2000"
}

function print(movie){
    return `the movie ${movie.Name} directed by ${movie.director} in ${movie.time}`;
}

console.log(print(movie1));
console.log(print(movie2));
console.log(print(movie3));