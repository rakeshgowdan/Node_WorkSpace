//event is a signal indictes something happened
//http-class raises an event it should process and return response

//in node each n every module returns request

//EventEmtter is a class
const EventEmitter=require('events');
const emmitter=new EventEmitter();
//Register a listener

//after es6 arrow 
emmitter.on('MessageLogged',(arg) => {

console.log('listener called',arg); 

});
//event with areguments if wanna pass url or id 

emmitter.emit('MessageLogged',{id:1,url:'http://'});
//emit-signals event is happening  
  
 