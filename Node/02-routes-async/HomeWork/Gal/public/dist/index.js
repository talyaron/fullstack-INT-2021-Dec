console.log("Connected!");
function handleGetjoke1() {
    try {
        axios.get("/api/image").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var picture = data.picture, error = data.error;
            if (error)
                throw new Error(error);
            renderPicture(picture);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetjoke2() {
    try {
        axios.get("/api/image").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var picture = data.picture, error = data.error;
            if (error)
                throw new Error(error);
            renderPicture(picture);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetjoke3() {
    try {
        axios.get("/api/image").then(function (_a) {
            var data = _a.data;
            console.log(data);
            var picture = data.picture, error = data.error;
            if (error)
                throw new Error(error);
            renderPicture(picture);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderPicture(picture) {
    var image = document.querySelector("#root");
    image.innerHTML = "<img src= " + picture.src + " alt=\"meme\"/>";
}
