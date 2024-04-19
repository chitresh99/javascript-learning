// Event Queue is where events like user interactions (clicks, keypresses)
// and I/O operations (reading files, network requests) are queued for execution.


// This is where the intersting function of javascript starts

console.log('Start');

document.getElementById('myButton').addEventListener('click', function() {
    console.log('Button clicked!');
});

console.log('End');
