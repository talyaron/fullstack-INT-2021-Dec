var arrNumbers = [24, 70, 100];
var i = 0;
function moveUp() {
    if (i == 0) {
        i = 1;
        var element_1 = document.getElementById("progressBarOne");
        var height_1 = 0;
        var id_1 = setInterval(frame, 30);
        function frame() {
            if (height_1 >= arrNumbers[0]) {
                clearInterval(id_1);
                i = 0;
            }
            else {
                height_1++;
                element_1.style.height = height_1 + "%";
                element_1.innerHTML = height_1 + "%";
            }
        }
    }
}
var b = 0;
function moveUpTwo() {
    if (b == 0) {
        b = 1;
        var element_2 = document.getElementById("progressBarTwo");
        var height_2 = 0;
        var id_2 = setInterval(frame, 30);
        function frame() {
            if (height_2 >= arrNumbers[1]) {
                clearInterval(id_2);
                b = 0;
            }
            else {
                height_2++;
                element_2.style.height = height_2 + "%";
                element_2.innerHTML = height_2 + "%";
            }
        }
    }
}
var c = 0;
function moveUpThree() {
    if (c == 0) {
        c = 1;
        var element_3 = document.getElementById("progressBarThree");
        var height_3 = 0;
        var id_3 = setInterval(frame, 30);
        function frame() {
            if (height_3 >= arrNumbers[2]) {
                clearInterval(id_3);
                c = 0;
            }
            else {
                height_3++;
                element_3.style.height = height_3 + "%";
                element_3.innerHTML = height_3 + "%";
            }
        }
    }
}
