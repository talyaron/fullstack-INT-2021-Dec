function handleGetMeme1() {
    try {
        axios
            .get("/api/meme1")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var meme = data.meme, error = data.error;
            if (error)
                throw new Error(error);
            rendermeme(meme);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetMeme2() {
    try {
        axios
            .get("/api/meme2")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var meme = data.meme, error = data.error;
            if (error)
                throw new Error(error);
            rendermeme(meme);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetMeme3() {
    try {
        axios
            .get("/api/meme3")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var meme = data.meme, error = data.error;
            if (error)
                throw new Error(error);
            rendermeme(meme);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function rendermeme(meme) {
    var root = document.querySelector("#root");
    root.innerHTML = "<img src= " + meme.src + " alt=\"meme\"/>";
}
