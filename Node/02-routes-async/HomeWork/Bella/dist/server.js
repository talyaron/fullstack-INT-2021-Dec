var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.use(express.static('public'));
var memes = [
    { name: "meme1", src: "./imgs/img1.png" },
    { name: "meme2", src: "./imgs/img2.png" },
    { name: "meme3", src: "./imgs/img3.png" }
];
app.get('/api/meme1', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ meme: memes[0] });
        }, 100);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/meme2', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ meme: memes[1] });
        }, 100);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/meme3', function (req, res) {
    try {
        setTimeout(function () {
            res.send({ meme: memes[2] });
        }, 100);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("Server listening on port " + port);
});
