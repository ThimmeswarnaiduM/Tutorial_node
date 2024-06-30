const os=require('os');
const user=os.userInfo();
console.log(user)
console.log(`The System up time is ${os.uptime()} seconds`);
const CurrentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
    
}
console.log(CurrentOs);