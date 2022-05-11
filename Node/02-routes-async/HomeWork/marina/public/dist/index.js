function handleButton() {
    try {
        axios.get("/stock-img").then(function (_a) {
            var data = _a.data;
            // console.log(data);
            var stock = data.stock, error = data.error;
            // console.log(stock);
            if (error)
                throw new Error(error);
            renderOutput(stock);
        });
    }
    catch (error) {
        console.error(error);
    }
}
function renderOutput(jokes) {
    try {
        var root = document.querySelector("#root");
        root.innerHTML = "<div class=\"card\">\n      <img src=\"" + jokes.url + "\"></img>\n      <p class=\"text\">" + jokes.text + "</p>\n      <p>" + jokes.title + "</p>\n      </div>\n      ";
    }
    catch (error) {
        console.error(error);
    }
}
