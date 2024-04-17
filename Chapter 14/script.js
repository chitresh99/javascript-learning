//return one function from another function

function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closure = outerFunction();

closure(); // Outputs: "I am from the outer function"

//use closures when absolutely needed