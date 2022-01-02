// WHEN WE INSTALL NODE WE AUTOMATICALLY INSTALL NPM

// NPM ALLOWS US TO DO
// 1.REUSE OUR OWN CODE IN OTHER PROJECTS/DEVELOPER
// 2.SHARE OUR SOLUTIONS WITH OTHER DEVELOPERS

// WE CAN VISIT NPMJS.COM -> FOR LIBRARIES
// package, dependency, module one and the same

// npm -- global command, comes with node
// npm --version

// local dependency -- use it only in this particular project
// npm i <packagename>

//global dependency  -- use it in any project
// npm install -g <packagename>

// package.json -- manifest file(stores important info about project/package) dependencies is imp!
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ =require('lodash');

const items = [1 ,[2,[3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
