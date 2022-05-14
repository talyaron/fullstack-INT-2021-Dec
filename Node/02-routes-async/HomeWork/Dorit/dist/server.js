var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
var jokes = [
    { text: 'Hear about the new restaurant called Karma, Theres no menu - You get what you deserve', type: 1 },
    { text: "A bear walks into a bar and says, Give me a whiskey and … cola :Why the big pause asks the bartender the bear shrugged. Im not sure I was born with them.", type: 1 },
    { text: "Did you hear about the claustrophobic astronaut? He just needed a little space.", type: 1 },
    { text: "I painted my computer black so it would run faster. Now it doesn't work. Then I painted my computer white so it would work.Now the whole system is corrupt", type: 1 },
];
var memes = [
    { text: "https://funny.yo-yoo.co.il/pics/images/uploads/0ef8eb.jpg", type: 2 },
    { text: "https://funny.yo-yoo.co.il/pics/images/uploads/89ba93.jpg", type: 2 },
    { text: "https://funny.yo-yoo.co.il/pics/images/uploads/womandafrw22.jpg", type: 2 },
    { text: "https://funny.yo-yoo.co.il/pics/images/uploads/photo_2879.jpg", type: 2 }
];
var i = 0;
while (i < 999999) {
    app.get('/api/Joke', function (req, res) {
        try {
            if (i % 2 === 0) {
                var randNumber = Math.round(Math.random() * jokes.length);
                res.send({ joke: jokes[randNumber] });
            }
            else {
                var randNumber = Math.round(Math.random() * memes.length);
                res.send({ meme: memes[randNumber] });
            }
        }
        catch (error) {
            res.send({ error: error.message });
        }
    });
    i++;
}
app.listen(port, function () {
    console.log("Server listening on port http://localhost:" + port);
});
