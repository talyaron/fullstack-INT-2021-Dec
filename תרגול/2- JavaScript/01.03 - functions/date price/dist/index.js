// //Date
// const toDate = date => {
//     return new Intl.DateTimeFormat('en-EN', { //for locales also can write: "he-HE-u-ca-hebrew" or "en-EN-u-nu-lath"
//         day: '2-digit',
//         month: 'numeric',
//         year: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit'
//     }).format(new Date(date))
// }
// document.querySelectorAll('.date').forEach(node => {
//     node.textContent = toDate(node.textContent)
// })
// document.querySelectorAll('.date2').forEach(node => {
//     node.textContent = toDate(new Date())
// })
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
// //Price
// const toCurrency = price => {
//     return new Intl.NumberFormat('en-EN', {
//         currency: "usd",
//         style: 'currency'
//     }).format(price)
// }
// document.querySelectorAll('.price').forEach(node => {
//     node.textContent = toCurrency(node.textContent)
// })
// //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
// console.log(new Date().getSeconds())
// setTimeout(() => {
//     console.log(`timeput ${new Date().getSeconds()}`)
// }, 1000)
// setInterval(() => {
//     console.log(`interval ${new Date().getSeconds()}`)
// }, 1000)
