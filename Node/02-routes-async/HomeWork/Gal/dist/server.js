var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.use(express.static('public'));
var imageArray = [
    {
        name: 'man',
        src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    },
    {
        name: 'woman',
        src: 'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.1.2011762371.1644019200'
    },
    {
        name: 'kid',
        src: 'https://nationaltoday.com/wp-content/uploads/2021/04/Every-Kid-Healthy.jpg'
    }
];
app.get('/api/Image0', function (req, res) {
    try {
        res.send({ picture: imageArray[0] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/Image1', function (req, res) {
    try {
        res.send({ picture: imageArray[1] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.get('/api/Image2', function (req, res) {
    try {
        res.send({ picture: imageArray[2] });
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
app.listen(port, function () {
    console.log("server is listening on port " + port);
});
