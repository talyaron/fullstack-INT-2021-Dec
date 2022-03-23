const item: HTMLDivElement = document.querySelector('.item')

function numpad1 () {
    item.innerText = 'Hanan ohav benim';
}

function numpad2 () {
    item.innerText = 'adain ohav benim';
}

function numpad3 () {
    item.innerText = '3th time ice cream';
}

function numpad4 () {
    item.innerText = '4th time ciggerete';
}

const btns: NodeList = document.querySelectorAll('button')
console.log(btns)

btns[0].addEventListener('click', numpad1)

const body:HTMLBodyElement = document.querySelector('body')


body.addEventListener('keyup', (e) => {
    console.log(e.code)
})