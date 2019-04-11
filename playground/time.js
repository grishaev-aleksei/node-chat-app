const moment = require('moment');

const date = moment();

date.add(1, "years").subtract(10,"months");

console.log(date.format('MMMM Do, YYYY'));
console.log(date.format('h:mm a'));