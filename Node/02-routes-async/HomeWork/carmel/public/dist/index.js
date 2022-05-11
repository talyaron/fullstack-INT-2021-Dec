var choosenSetup = document.querySelector('.jokeSetup');
var choosenPunchline = document.querySelector('.jokePunchline');
var choosenmeme = document.querySelector('.meme');
function getJoke(event) {
    var num = event.target.className;
    axios.get("/api/joke" + num).then(function (_a) {
        var data = _a.data;
        var setup = data.setup, punchline = data.punchline, error = data.error;
        if (error)
            throw new Error(error);
        choosenSetup.innerHTML = "<h1>Choosen Joke:</h1> " + setup;
        choosenPunchline.innerText = punchline;
    });
}
function getMeme() {
    var num = Math.floor((Math.random() * 4));
    console.log(num);
    axios.get("/api/memes").then(function (_a) {
        var data = _a.data;
        var Memes = data.Memes, error = data.error;
        if (error)
            throw new Error(error);
        choosenmeme.innerHTML = "<img src=\"" + data[num].pic + "\" alt=\"\">";
    });
}
