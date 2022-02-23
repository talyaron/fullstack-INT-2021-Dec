var mixArray = ['dana', 300, 'blah blah', '54', 'I love dogs', 4, 15, 'Just do it'];
function numStrg(array, variable) {
    if (variable === 'strings') {
        for (var i = 0; i <= mixArray.length; i++) {
            if (mixArray[i] === 'string') {
                console.log(mixArray[i]);
            }
        }
    }
    ;
}
