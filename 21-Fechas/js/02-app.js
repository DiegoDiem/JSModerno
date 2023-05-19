const diaHoy = new Date();

// moment.locale('es');

console.log(moment().format('MMMM Do YYYY h:mm:ss a'));
console.log(moment.utc().format('MMMM Do YYYY h:mm:ss a'));

console.log(moment().format('LLLL'));
console.log(moment.utc().format('LLLL'));


var a = moment();
var b = moment.utc();
a.format();  // 2013-02-04T10:35:24-08:00
b.format();  // 2013-02-04T18:35:24+00:00
a.valueOf(); // 1360002924000
b.valueOf(); // 1360002924000

const date = '2022-11-14T10:41:00-06:00'
const date2= new Date(date)
// console.log(date2.getTime());
const distance = date2.getTime() - b.valueOf();
console.log(distance);
console.log(a.format());
console.log(b.format());
console.log(a.valueOf());
console.log(b.valueOf());