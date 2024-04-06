//const,let and var

//const -> when we want constant values,changing the value will result in errors the value cannot be changed
//var -> avoid using var at all;
//let -> to change values

let a = 10;
const b = 20; //there is memory allocated for these too but they are not undefined the value is unavailable

var c = 30; //it's undefined it's in global because it's with var

//the period between creating let or const or when you initialised those there is a term for it,
// it is called temporal dead zone

// const,let is block scoped
//var is function scoped

//this is a block below
{
    let e = 10;
    const f = 20; 
    var g = 30;
    console.log(e);
    console.log(f);// you can only access these inside the block
    console.log(g);
}

console.log(g);//you can access this outside the block