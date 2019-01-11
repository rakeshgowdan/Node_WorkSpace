//creating a module
var url="http://myapp.io/log";

function log(message)
{
    //send http request
    console.log(message);
}
//making it has public for easy access
//module.exports.log=log;
module.exports=log;  //can directly call function
//module.exports.endPoint=url;