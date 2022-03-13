const arrNumbers: Array<any> = [24, 70, 100];



let i = 0;
function moveUp() {
    if (i == 0) {
        i = 1;
        let element = document.getElementById("progressBarOne");
        let height = 0;
        let id = setInterval(frame, 30);

        function frame() {
            if (height >= arrNumbers[0]) {
                clearInterval(id);
                i = 0;
            } else {
                height++;
                element.style.height = height + "%";
                element.innerHTML = height + "%";
            }
        }
    }
}
let b = 0;
function moveUpTwo() {
    if (b == 0) {
        b = 1;
        let element = document.getElementById("progressBarTwo");
        let height = 0;
        let id = setInterval(frame, 30);

        function frame() {
            if (height >= arrNumbers[1]) {
                clearInterval(id);
                b = 0;
            } else {
                height++;
                element.style.height = height + "%";
                element.innerHTML = height + "%";
            }
        }
    }
}
let c = 0;
function moveUpThree() {
    if (c == 0) {
        c = 1;
        let element = document.getElementById("progressBarThree");
        let height = 0;
        let id = setInterval(frame, 30);

        function frame() {
            if (height >= arrNumbers[2]) {
                clearInterval(id);
                c = 0;
            } else {
                height++;
                element.style.height = height + "%";
                element.innerHTML = height + "%";
            }
        }
    }
}
