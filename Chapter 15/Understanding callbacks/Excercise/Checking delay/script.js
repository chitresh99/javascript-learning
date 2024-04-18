function doTask(callback) {
    console.log('Starting the task...');
    
    setTimeout(() => {
        console.log('Task completed after waiting for 2 seconds!');
        callback(); // Calling back to the provided callback function
    }, 2000); // Wait for 2000 milliseconds (or 2 seconds)
}

function taskCompleted() {
    console.log('Callback: Task is done!');
}

console.log('Before calling doTask');

// Simulating other tasks while waiting for the delay
console.log('Performing other tasks...');

let result = 0;
for (let i = 0; i < 1000000; i++) {
    result += i;
}

console.log('Other tasks completed.');

doTask(taskCompleted);

console.log('After calling doTask');
