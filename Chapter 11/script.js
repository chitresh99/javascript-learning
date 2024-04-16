//functions in javascript are also called first class citizens

//first way to write functions
function add(a,b){//memory is allocated for the function here
 return a+b;
}
console.log(add);
console.log(add(2,3));

//second way to write functions

let sum = function(a,b){//memory is allocated for the variable here
    return a+b;
}//use that refresh icon near the scope to check the local

console.log(sum);
console.log(sum(2,3));


//third way of function this will be declared in global
var sum2 = function(a,b){
    return a+b;
}
console.log(sum);
console.log(sum(2,3));
