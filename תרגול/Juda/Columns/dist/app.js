var columns = [30, 40, 50];
var column1 = document.querySelector('#column1');
var column2 = document.querySelector('#column2');
var column3 = document.querySelector('#column3');
console.dir(column1);
column1.innerHTML = columns[0];
column2.innerHTML = columns[1];
column3.innerHTML = columns[2];
column1.style.height = columns[0] + 'px';
column2.style.height = columns[1] + 'px';
column3.style.height = columns[2] + 'px';
