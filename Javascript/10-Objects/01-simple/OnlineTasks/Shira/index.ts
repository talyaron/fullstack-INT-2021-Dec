const movie1 = {
    title:"Black light",
    director:"Mark Williams",
    yearOfPublication:"2022"

}

const movie2 = {
    title:"The Matrix",
    director:"Wachowski sisters",
    yearOfPublication:"1999"

}

const movie3 = {
    title:"Dog",
    director:"Channing Tatum",
    yearOfPublication:"2021"

}

function moviePrint(movie){
return `The name of movie is : ${movie.title} directed by: ${movie.director} in ${movie.yearOfPublication}` 
}
console.log(moviePrint(movie1));
console.log(moviePrint(movie2));
console.log(moviePrint(movie3));




