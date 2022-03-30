function handaleSand(ev) {
    console.log(ev);
    ev.preventDefault();
    var elm = ev.target.elements;
    var result = {};
    for (var i = 0; i < elm.length; i++) {
        if (elm[i].name && elm[i].value) {
            result[elm[i].name] = elm[i].value;
        }
    }
    console.log(result);
}
