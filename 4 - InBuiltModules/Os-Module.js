//InBuilt Modules
//1.OS
//2.Path
//3.FileSystem(FS)
//4.HTTP

const os = require('os');
const user = os.userInfo();
console.log(user);

console.log(`The System Uptime is ${os.uptime()} Seconds`);

const currentos = {
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()
}
console.log(currentos);