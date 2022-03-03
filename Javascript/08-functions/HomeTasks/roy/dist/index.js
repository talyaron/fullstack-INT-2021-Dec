var arr = ["a", "c", 4, "d", 1, 2, 3, "b"];
var a = arr.filter(function (elm) { return typeof elm === "number"; });
var b = arr.filter(function (elm) { return typeof elm === 'string'; });
arr.forEach(function (elm) {
    try {
        if (typeof elm === "number") {
            console.log(a);
        }
        else if (typeof elm === "string") {
            console.log(b);
        }
        else {
            console.log("that value is unfit");
        }
    }
    catch (error) {
        console.log(error);
    }
});
