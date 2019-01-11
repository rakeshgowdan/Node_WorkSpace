const fs=require('fs');

const files=fs.readdirSync('./');
console.log(files);

//Async read dir
fs.readdir('./',function(err,files){
if (err)console.log('Error ',err);
else console.log('Result',files);
});