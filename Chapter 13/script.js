//arrow functions
let sum = (a,b)=>{
    return a+b;
}

// or
//let sum = (a,b) => a+b;

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
