//WE HAVE TWO WAYS TO DO IT 
//1.SYNCHRONOUS -> LINE BY LINE , TAKES REALLY LONG TIME ,THIS BEHAVES LIKE WHEN THE APP IS DOWN
//2.ASYNCHRONOUS -> MULTITASKING , MAKES EASIER TO ACCESS MULTIPLE USERS

//const {readFileSync} = require('fs'); -> if only readFileSync is required

//const fs = require('fs'); //if all fs we want

//readFileSync -> takes 2 arguments

const {readFileSync , writeFileSync} = require('fs');

console.log('start'); //TO DEMONSTRATE THE SYNC NATURE 

const first = readFileSync('./4 - InBuiltModules/Content/ForFSFirst.txt','utf8');
const second = readFileSync('./4 - InBuiltModules/Content/ForFSSecond.txt','utf8');

//console.log(first,second);

//WRITEFILESYNC  -> IF FILE NOT CREATED THEN IT CREATES 
//TAKES THREE ARGUMENT - > 1.Path 2.Content of file 3.append in that
writeFileSync('./4 - InBuiltModules/Content/result-sync.txt',`Here is the result : ${first} , ${second} `,{flag : 'a'});
console.log('Done'); //TO DEMONSTRATE THE SYNC NATURE
console.log('Starting the next one'); //TO DEMONSTRATE THE SYNC NATURE

//CALLBACKS CAN BE REPLACED BY PROMISES AND ASYNC AWAIT to AVOID MESSY CODE
