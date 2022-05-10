var express = require('express');
var Interface = require('readline').Interface;
var app = express();
var port = process.env.PORT || 5000;
app.use(express.static('public'));
app.listen(port, function () {
    console.log("server is listening on port " + port);
});
var jokes = [
    { text: 'Who’s there? Interrupting cow. Interrupting Co... MOO' },
    { text: 'Why did the bycicle collapse? it was two tired' },
    { text: "What kind of shoes of burglars wear? Sneakers" },
    { text: 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png' }
];
app.get('/api/joke1', function (req, res) {
    try {
        res.send({ joke: jokes[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/joke2', function (req, res) {
    try {
        res.send({ joke: jokes[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/joke3', function (req, res) {
    try {
        res.send({ joke: jokes[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
function getRandomJoke() {
    return Math.round(Math.random());
}
app.get('/api/randomJoke', function (req, res) {
    try {
        res.send({ joke: jokes[getRandomJoke()] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
var meme1 = {
    image: "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png"
};
var meme2 = {
    image: "https://pbs.twimg.com/media/Ds7ISZdXgAUyku9.jpg"
};
var meme3 = {
    image: "https://images-na.ssl-images-amazon.com/images/I/61skJm1OLUL.jpg"
};
var arrayOfMemes = [
    meme1,
    meme2,
    meme3,
];
app.get('/api/meme1', function (req, res) {
    try {
        res.send({ meme: arrayOfMemes[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/meme2', function (req, res) {
    try {
        res.send({ meme: arrayOfMemes[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/meme3', function (req, res) {
    try {
        res.send({ meme: arrayOfMemes[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
function getRandomMeme() {
    return Math.round(Math.random());
}
app.get('/api/randomMeme', function (req, res) {
    try {
        res.send({ meme: arrayOfMemes[getRandomMeme()] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
