const moment = require('moment');

let unix = moment().unix();
console.log(unix);
console.log(moment.unix(1595070951).format("YYYY-MM-DD"));