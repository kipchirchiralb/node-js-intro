const os = require("os"); // os - operating system module --- node js built in modules

console.log(os.freemem()); // free memory in bytes --- this is the memory that is not being used by the system
console.log(os.totalmem()); // total memory in bytes
console.log(os.hostname()); // hostname of the system
console.log(os.platform()); // platform of the system
console.log(os.arch()); // architecture of the system
console.log(os.type()); // type of the system
console.log(os.cpus().length); // cpu information --- this is an array of objects
