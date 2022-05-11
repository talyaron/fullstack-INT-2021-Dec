function handleJoke() {
    try {
        axios
            .get("/api/Joke")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var joke = data.joke, error = data.error;
            if (error)
                throw new Error(error);
            console.log(joke);
            renderJoke(joke);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function renderJoke(joke) {
    var newJoke = document.querySelector("#jokeToDisplay");
    newJoke.innerHTML = "" + joke;
}
