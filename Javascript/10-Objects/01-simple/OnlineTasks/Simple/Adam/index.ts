
const Queen = {
    
    MoviesName:"The Queen's Gambit",
    Director:"Scott Frank",
    yearOfPublication:"2020",
};

const Forrest = {
    
    MoviesName:"Forrest Gump",
    Director:"Robert Zemeckis",
    yearOfPublication:"1994",
};

const truman = {
  
    MoviesName:"The truman show",
    Director:"Peter Wier",
    yearOfPublication:"1998",
};

function Movie(Movieintro){
    return ` ${Movieintro.MoviesName} ${Movieintro. Director} ${Movieintro. yearOfPublication}`
}

const movie1=Movie(Queen)
console.log(movie1)
const movie2= Movie(Forrest)
console.log(movie2)
const movie3= Movie(truman)
console.log(movie3)


