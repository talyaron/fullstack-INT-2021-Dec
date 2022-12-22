function handleDisplay() {
    try {
        axios
            .get("/api/Joke")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var joke = data.joke, error = data.error;
            if (error)
                throw new Error(error);
            console.log(joke.type);
            renderJoke(joke);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function renderJoke(joke) {
    var newJoke = document.querySelector("#jokeToDisplay");
    console.log(joke.type);
    if (joke.type === 2) {
        newJoke.innerHTML = "<img src= " + joke.text + " alt=\"joke\"/>";
    }
    else if (joke.type === 1) {
        newJoke.innerText = "" + joke.text;
    }
}
