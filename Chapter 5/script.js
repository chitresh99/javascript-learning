//value types and reference types

let x = "chitresh";
let y = x;
// In the above lines the value of x copied into y and did not change


x = "siddhesh"; //now here the value of y changed

console.log(x);
console.log(y);

let p = {name:"chitresh"}; //creating an object here and not just string
let q = p;

p.name = "siddesh"; // here we are passing a refrence so both of them changed

console.log(p);
console.log(q);