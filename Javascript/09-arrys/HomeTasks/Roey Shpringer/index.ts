

const array = [1, "x", 32, 42, 51, "abcd", 11, "ajax", "emma", "takemichi", 12, 1];

function arraySort(array: Array<any>, typeInput) {
    typeInput = prompt(`enter "Strings" / "Numbers"`).toLowerCase();
    if (typeInput == 'numbers' || typeInput == 'strings') {
        for (let i = 0; i < array.length; i++) {
            if (typeInput == 'numbers' && typeof (array[i]) == 'number') {
                console.log(array[i]);
            }
            else if (typeInput == 'strings' && typeof (array[i]) == 'string') {
                console.log(array[i])
            }
        }
    }
    else console.log(`you entered ${typeInput}, it is not a string and not a number`)
}

arraySort(array, 'strings');

