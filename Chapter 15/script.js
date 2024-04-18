//ok this chapter is important

//callbacks
//call back is nothing but a function that is passed
//to be called when some operation happens

// This is our main function
function cookFood(food, callback) {
    console.log(`Cooking ${food}...`);
    setTimeout(() => {
        console.log(`${food} is ready!`);
        callback(); // Calling back the callback function
    }, 3000); // This will wait 3 seconds before calling back
}

// This is our callback function
function serveFood() {
    console.log('Food is served!');
}

// Calling our main function and passing the callback
cookFood('pizza', serveFood);

