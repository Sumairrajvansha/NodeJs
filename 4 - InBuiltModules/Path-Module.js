//WE WANT THIS BECAUSE OUR APPLICATION RUNS IN DIFFERENT ENVIRONMENT

const path = require('path');
console.log(path.sep); // seperator - /

//path.join -> joins sequence of path
const filePath = path.join('./content','subfolder','test.txt');
console.log(filePath);

//accessing only last portion(third argument in above)
const base = path.basename(filePath);
console.log(base);  //test.txt

//resolve() -> returns an absolute path
const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);


