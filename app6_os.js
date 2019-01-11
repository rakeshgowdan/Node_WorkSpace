//Os module with 
const os=require('os');
var total =os.totalmem();
var free=os.freemem();


console.log('total mem'+total);
console.log('free mem'+free);

//template string
//es6 implements new feature this
//which helps buils a string without concat
console.log(`total mem: ${total}`)
console.log(`free mem: ${free}`);
