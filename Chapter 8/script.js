// Hoisting

createsong('hola at your boy'); //this will give us the log this won't work in most languages but here it is working
console.log(x); //this will give the output undefined

function createsong(songname){
    console.log('creating ' + songname);
}

var x = 10;
console.log(x);//this will work
createsong('wohraat');
createsong('popular');


// accessing a function before intializing them is called hoisting 


//How javascript works

//Execution context --> The environment where the code is evaluated executed is called execution context
//GEC --> Global execution context,this is created intially
//Everytime you run or execute a javascript code there is an execution context created
//Everytime a function is created a 'New execution context'is created
//The new NEC will be created to the call stack

//Execution context has two main components

// First comp - Before running the code , first phase happens just memomry is allocated this is called memory phase
//Second phase - code is executed line by line, this is called the code phase
//javascript is synchronous single threaded language
//code phase - thread of execution
    