const names = require('./Names');
const sayHi = require('./Utils');
const data = require('./alternate');
require('./MindGrenade'); //const not required as it is function inside module
console.log(data);
sayHi('Sumair');
sayHi(names.john);
sayHi(names.peter);