const arr: Array<any> = [13, 'Noy', 23, 'Bar', 655, 18, 306, 'Ilana', 'Gal'];
const userOrder:string = prompt ("Please select an order - string / number");

function stringOrNumber(arr: Array<any>, order: string): Array<any> {
    try {
        if (order!="number" && order!="string"){
            throw "Didn't get a competable order"
        }
        return arr.filter(elm => typeof elm === order);
    }
    catch (error) {
        console.error(error);

    }
}

console.log(stringOrNumber(arr, userOrder));