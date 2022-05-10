const choosenSetup:HTMLDivElement = document.querySelector('.jokeSetup')
const choosenPunchline:HTMLDivElement = document.querySelector('.jokePunchline')
const choosenmeme = document.querySelector('.meme')


function getJoke(event){
    let num = event.target.className
    axios.get(`/api/joke${num}`).then(({data}) => {
        const {setup, punchline, error} = data;
        if (error) throw new Error(error);
        choosenSetup.innerHTML="<h1>Choosen Joke:</h1> " + setup
        choosenPunchline.innerText=punchline
    })
}

function getMeme(){
    let num = Math.floor((Math.random() * 4));
    console.log(num)
    axios.get(`/api/memes`).then(({data}) => {
        const {Memes, error} = data;
        if (error) throw new Error(error);
        choosenmeme.innerHTML= `<img src="${data[num].pic}" alt="">`
    })
}