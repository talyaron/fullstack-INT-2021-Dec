function handleGetJoke1() {
    try {
        axios.get("/api/joke1").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var joke = data.joke, error = data.error;
            if (error)
                throw new Error(error);
            renderJoke(joke);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetJoke2() {
    try {
        axios.get("/api/joke2").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var joke = data.joke, error = data.error;
            if (error)
                throw new Error(error);
            renderJoke(joke);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetJoke3() {
    try {
        axios.get("/api/joke3").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var joke = data.joke, error = data.error;
            if (error)
                throw new Error(error);
            renderJoke(joke);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetRandomJoke() {
    try {
        axios.get("/api/randomJoke").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var joke = data.joke, error = data.error;
            if (error)
                throw new Error(error);
            renderJoke(joke);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderJoke(joke) {
    var root = document.querySelector("#root");
    root.innerText = "my joke for you is: " + joke.text;
}
function handleGetRandomMeme() {
    try {
        // console.log(arrayOfMemes)
        axios.get("/api/randomMeme").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var arrayOfMemes = data.arrayOfMemes, error = data.error;
            if (error)
                throw new Error(error);
            renderJoke(arrayOfMemes);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderMeme(arrayOfMemes) {
    var root = document.querySelector("#randomMeme");
    root.innerText = "my joke for you is: " + arrayOfMemes.image;
}
