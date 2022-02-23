const BloodDiamond = {
    name:"Blood Diamond",
    director : "Edward Zwick",
    ReleasedDate: "2008",

}

const GoodFellas ={
    name:"Goodfellas",
    director : "Martin Scorsese",
    ReleasedDate: "1990",

}


const Shawshank ={
    name:"shawshank redemption",
    director : "Frank Darabont",
    ReleasedDate: "1994",

}

function Movie(pesonObj){
    return `Hello everybody, our movie today is ${pesonObj.name} was directed by ${pesonObj.director} and released in year ${pesonObj.ReleasedDate} `
}

const movieBD = Movie (BloodDiamond);
console.log(movieBD);

const movieGF = Movie (GoodFellas);
console.log(movieGF);

const movieSH = Movie (Shawshank);
console.log(movieSH);