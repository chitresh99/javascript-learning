//three main things here

//call stack , task queue ,event loop

// the call stack handles the synchronous execution of your code, while the task queue collects asynchronous tasks to be executed once the call stack is empty.

//so basically we run our javascript code 
//and we wait for the task to complete
//so it's in the task queue
//meanwhile other code gets executed
//after the task is complete we move the task 
//from task queue to call stack

// Run JavaScript Code: You start executing your JavaScript code.
// Wait for Task: When an asynchronous task is encountered (like setTimeout), it's queued in the task queue to wait for its turn.
// Execute Other Code: While waiting for the asynchronous task, other synchronous code continues to execute from the call stack.
// Task Completion: Once the asynchronous task is ready to run, it's moved from the task queue to the call stack for execution.

// The role of event loop

// //Check Call Stack: The event loop constantly checks if the call stack is empty.
// Move Task to Call Stack: If the call stack is empty and there are tasks waiting in the task queue, the event loop moves the first task from the task queue to the call stack for execution.
// Execute Task: The task in the call stack is then executed.
// Repeat: The event loop continues this process, checking the call stack and moving tasks from the task queue to the call stack as needed, ensuring that asynchronous tasks are executed when their turn comes.

let count = 0; // Initialize a variable named count with a value of 0

const intervalId = setInterval(() => { // Start an interval and store its ID in intervalId
    count++; // Increment the count by 1
    console.log(`Count: ${count}`); // Log the current value of count to the console
    
    if (count >= 5) { // Check if count is greater than or equal to 5
        clearInterval(intervalId); // If true, stop the interval using its ID
        console.log('Count stopped!'); // Log "Count stopped!" to the console
    }
}, 1000); // Execute the interval function every 1000 milliseconds (1 second)

