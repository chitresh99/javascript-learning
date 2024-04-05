// primitive or value types
// String,Number,boolean,undefined,NULL,Symbol'
//JS - Dynamic Language
//In static languages we can't change the type and the values
//In dynamic languages we can change both the type and value

//string
let x = "educosys"; //creating a variable and storing data in it
console.log(x);//printing or logging the data of x
console.log(typeof (x));//helps us to identify the datatype

//number
let y = 1.4;
console.log(y);
console.log(typeof (y)); // this will be a number

//unlike java and c++ regardless if it has a decimal or not it will be a number only

//this below is a boolean
let p = true;
console.log(p);
console.log(typeof (p));


//let's leave an empty variable with out any data 

let w;
console.log(w); //this gives the result undefined

let q;
console.log(q); //undefined is also a datatype
q = "chitresh";
console.log(q);//this will now get logged as chitresh which is string

let m = "raftaar";
console.log(x);
console.log(typeof(x));
m = undefined; //technically we can but we shouldn't do this
console.log(typeof(x));

//we are not supposed to assign any value to undefined

//if you want the value to be empty you can use null
let n = "educosys";
console.log(n);
n = null;//we can call it null //this will give the output object
console.log(typeof (n));