//functions in javascript are also called first class citizens

//first way to write functions
function add(a,b){
 return a+b;
}
console.log(add);
console.log(add(2,3));

//second way to write functions

let sum = function(a,b){
    return a+b;
}

console.log(sum);
console.log(sum(2,3));

var sum2 = function(a,b){
    return a+b;
}
console.log(sum);
console.log(sum(2,3));
