//lexical scope:- bascially we check if this variable is available in this function or not
//it the function would check if the variabel is inside or not if it's not inside then it will go to the outer scope

function hello(){
    let x = 10;
    console.log(10);
}

// let x = 100;
hello();

//first it checks in local and then global
//pehele local phir global