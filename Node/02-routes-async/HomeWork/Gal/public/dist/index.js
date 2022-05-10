function handleGetUser1() {
    try {
        console.log("get user 12");
        renderLoader();
        axios
            .get("/api/1")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var user = data.user, error = data.error;
            if (error)
                throw new Error(error);
            console.log(user);
            renderLoader();
            renderUser(user);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetUser2() {
    try {
        console.log("get user 12");
        renderLoader();
        axios
            .get("/api/user1")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var user = data.user, error = data.error;
            if (error)
                throw new Error(error);
            console.log(user);
            renderLoader();
            renderUser(user);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
function handleGetUser3() {
    try {
        console.log("get user 12");
        renderLoader();
        axios
            .get("/api/user1")
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var user = data.user, error = data.error;
            if (error)
                throw new Error(error);
            console.log(user);
            renderLoader();
            renderUser(user);
        })["catch"](function (err) { return console.error(err); });
    }
    catch (error) {
        console.error(error);
    }
}
