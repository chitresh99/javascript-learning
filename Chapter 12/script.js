let sum = function(a,b){
    return a+b;
}

console.log(sum);
console.log(2,3);

let diff = function(a,b){
    return a-b;
}

function operate(operationFunc,a,b){
    return operationFunc(a,b);
}

//operationFunc is a function parameter
//operationFunc gets invoked when we call sum and diff

console.log(operate(sum,2,3));
console.log(operate(diff,2,3));

//Functions are called as first class citizens
//Higher order functions are functions that take functions either as arguments or return a function 
