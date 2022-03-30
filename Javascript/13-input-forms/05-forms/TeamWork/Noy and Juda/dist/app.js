var details = document.querySelector('.details');
function handleEnter(event) {
    event.preventDefault();
    // const user: string = event.target.elements.user.value
    // const pass: string = event.target.elements.pass.value
    // const confirmPass: string = event.target.elements.confirmPass.value
    // const url: string = event.target.elements.url.value
    var elements = event.target.elements;
    var form = {};
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].name && elements[i].value) {
            form[elements[i].name] = elements[i].value;
        }
    }
    if (form.pass === form.confirmPass) {
    }
}
