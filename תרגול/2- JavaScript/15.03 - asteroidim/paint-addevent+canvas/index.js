const div2 = document.querySelector("#two")
const button = document.querySelector("button");

button.addEventListener('click', () => {
    div2.scrollIntoView({
        behavior: 'smooth', //default: auto
        block: 'nearest', //start, center, end, nearest //default:start //יישור אנכי
        inline: 'center' //start, center, end, nearest //default:nearest //יישור אופקי
    })
})

const up = document.querySelector(".up")
up.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

let scrollPosition = 0;

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;
    console.log(scrollPosition)

    if (scrollPosition > 1000) {
        div2.style.background = "red";
    } else if (scrollPosition < 1000) {
        div2.style.background = "blue";
    }
})