
const movie1 ={

title:'avengers',

director:'bob bobson',

yearOfPublication:'1948',

}
const movie2 ={

    title:'good guy',
    
    director:'guy good',
    
    yearOfPublication:'20BC',
    
    }
    const movie3 ={

        title:'who let the dogs out',
        
        director:'rap rapper',
        
        yearOfPublication:'2077',
        
        }

function moviespecs(moviespec){
    return `movie title' ${moviespec.name} 'by director' ${moviespec.director} 'from the year' ${moviespec.yearOfPublication}`
}

const movie= moviespecs(movie1)
const movie22= moviespecs(movie2)
const movie33= moviespecs(movie3)

console.log(movie, movie22, movie33)

