//no window like JS in this

console.log(__dirname);    //gives current directory
console.log(__filename);   //gives filename
console.log(require);      //function to use modules
console.log(module);       //info about current module
console.log(process);      //info about environment where the program is being executed

//prints hello world after every second
setInterval(() => {
     console.log("Hello World!");
 },5000);