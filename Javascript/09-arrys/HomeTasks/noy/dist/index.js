var arr = [13, 'Noy', 23, 'Bar', 655, 18, 306, 'Ilana', 'Gal'];
var userOrder = prompt("Please select an order - string / number");
function stringOrNumber(arr, order) {
    try {
        if (order != "number" && order != "string") {
            throw "Didn't get a competable order";
        }
        return arr.filter(function (elm) { return typeof elm === order; });
    }
    catch (error) {
        console.error(error);
    }
}
console.log(stringOrNumber(arr, userOrder));
