var CheckIn = /** @class */ (function () {
    function CheckIn(name, comingFrom, purpose, date) {
        this.name = name;
        this.comingFrom = comingFrom;
        this.purpose = purpose;
        this.date = date;
    }
    CheckIn.prototype.display = function () {
        return this.name + " coming from " + this.comingFrom + " checked in for " + this.purpose + " on " + this.date;
    };
    return CheckIn;
}());
var CheckOut = /** @class */ (function () {
    function CheckOut(name, comingFrom, purpose, date) {
        this.name = name;
        this.comingFrom = comingFrom;
        this.purpose = purpose;
        this.date = date;
    }
    ;
    CheckOut.prototype.display = function () {
        return this.name + " coming from " + this.comingFrom + " for " + this.purpose + " on " + this.date + " has checked out";
    };
    return CheckOut;
}());
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ;
    ListTemplate.prototype.render = function (item, heading) {
        var li = document.createElement('li');
        var h3 = document.createElement('h3');
        h3.innerText = heading;
        li.append(h3);
        var p = document.createElement('p');
        p.innerText = item.display();
        li.append(p);
        this.container.append(li);
    };
    return ListTemplate;
}());
var form = document.querySelector('.input-form');
// grabbing the HTML elements
var type = document.querySelector('#type');
var personName = document.querySelector('#name');
var from = document.querySelector('#from');
var purpose = document.querySelector('#purpose');
var date = document.querySelector('#date');
// creating a ListTemplate instance
var ol = document.querySelector('ol');
var list = new ListTemplate(ol);
//'form submit' event listner
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var visitor;
    if (type.value === 'CheckIn') {
        visitor = new CheckIn(personName.value, from.value, purpose.value, date.value);
    }
    else {
        visitor = new CheckOut(personName.value, from.value, purpose.value, date.value);
    }
    list.render(visitor, type.value);
    type.value = '';
    personName.value = '';
    from.value = '';
    purpose.value = '';
    date.value = '';
});
// function handleSelectflag(ev:any){
//     console.log(ev.target.value)
// }
// const flag = ['Argentine', 'Israel', 'England', 'France'];
// function myOptions(option:string){
//     return`<option value=${option}>${option}</option>`
// }
// function mySelections(options:Array<string>, functionName:string, element:Element){
//    try { 
//         let html = `<select onchange="${functionName}(event)">
//         <option value="" disabled selected>Choose</option>`;
//         options.forEach(el => {
//             html += myOptions(el)
//         });
//         html += `</select>`
//         element.innerHTML = html;
//     } catch (error){
//         console.log(error)
//     }    
// }
// const root = document.querySelector('#root');
// mySelections(flag,'handleSelectflag',root)
