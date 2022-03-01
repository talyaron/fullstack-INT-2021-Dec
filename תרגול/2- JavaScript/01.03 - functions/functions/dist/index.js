// alert("abd"[0]) //Show the first char in the string
//-----
// console.log('one');
// setTimeout(() => {
//     console.log('two');
// }, 0)
// setInterval(() => {
//     console.log('hi')
// }, 1000)
// console.log('three');
//-----
// const arr = [1, 2, 3]
// const fun = () => {
//     alert(arr)
// }
// fun()
//-----
// let obj1 = { a: 1 };
// let obj2 = { b: 2 };
// let obj3 = { c: 3 };
// let obj = Object.assign(obj1, obj2, obj3);
// console.log(obj)
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
//-----
// const func = ({ a, b, c }) => {
//     console.log(a, b, c);
// }
// func({ a: 3, b: 'front_tests', c: true });
// func(3, 'front_tests', true);
//-----
// const arr = [1, 2, 3, 4, 5]
// console.log(arr.fill(2, 1, 3)) //fill(value, start, end)
// const array1 = [1, 2, 3, 4];
// // fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// // expected output: [1, 2, 0, 0]
// // fill with 5 from position 1
// console.log(array1.fill(5, 1));
// // expected output: [1, 5, 5, 5]
// console.log(array1.fill(6));
// // expected output: [6, 6, 6, 6]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
//-----
// const arr = [12, 9, 6, 3]
// const result = arr.flatMap(x => [x / 3]);
// const result2 = arr.map(x => [x / 3]);
// console.log(result)
// console.log(result2)
//-----
// const animals = ['elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
// console.log(animals.length)
// console.log(animals.slice(2, -1));
// arr.slice([begin[, end]])
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//-----
// let arr = ['0', '1', '2', '3'];
// let result = arr.splice(2, 1, '2');
// /*
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
// */
// console.log(arr)
// console.log(result)
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]
// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//------
// const arr = [
//     { a: 1, b: 4 },
//     { a: 2, b: 5 },
//     { a: 3, b: 6 }
// ];
// arr.forEach((person) => { console.log(person.b) })
