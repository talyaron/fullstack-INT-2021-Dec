const express = require('express');
const { Interface } = require('readline');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('public'));

app.listen(port, () => {
	console.log(`server is listening on port ${port}`);
});

interface Joke{
    text:string;
}

const jokes:Array<Joke>= [
    {text:'Who’s there? Interrupting cow. Interrupting Co... MOO'},
    {text:'Why did the bycicle collapse? it was two tired'},
    {text:"What kind of shoes of burglars wear? Sneakers"},
    {text: 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png'}  
]

app.get('/api/joke1', (req, res)=>{
    try {
            res.send({joke:jokes[0]})
    } catch (error) {
        res.send({error:error.message})
    }
});
app.get('/api/joke2', (req, res)=>{
    try {
            res.send({joke:jokes[1]})
    } catch (error) {
        res.send({error:error.message})
    }
});
app.get('/api/joke3', (req, res)=>{
    try {
            res.send({joke:jokes[2]})
    } catch (error) {
        res.send({error:error.message})
    }
});

function getRandomJoke() {
    return Math.round(Math.random());
  }
  
  
app.get('/api/randomJoke', (req, res)=>{
    try {
            res.send({joke:jokes[getRandomJoke()]});
       
    } catch (error) {
        res.send({error:error.message})
    }
});

interface Meme{
    image?: String;
}

let meme1: Meme= {
    image: "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png",       
};

let meme2: Meme= {
    image: "https://pbs.twimg.com/media/Ds7ISZdXgAUyku9.jpg",       
};
let meme3: Meme= {
    image: "https://images-na.ssl-images-amazon.com/images/I/61skJm1OLUL.jpg",       
};

const arrayOfMemes: Array<Meme> = [
    meme1,
    meme2,
    meme3,
 
  ];
  

app.get('/api/meme1', (req, res)=>{
    try {
            res.send({meme:arrayOfMemes[0]})
    } catch (error) {
        res.send({error:error.message})
    }
});
app.get('/api/meme2', (req, res)=>{
    try {
            res.send({meme:arrayOfMemes[1]})
    } catch (error) {
        res.send({error:error.message})
    }
});
app.get('/api/meme3', (req, res)=>{
    try {
            res.send({meme:arrayOfMemes[2]})
    } catch (error) {
        res.send({error:error.message})
    }
});

function getRandomMeme() {
    return Math.round(Math.random());
  }
  
  
app.get('/api/randomMeme', (req, res)=>{
    try {
            res.send({meme:arrayOfMemes[getRandomMeme()]});
       
    } catch (error) {
        res.send({error:error.message})
    }
});