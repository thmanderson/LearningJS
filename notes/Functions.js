// Notes for Functions from PluralSight course

// Example function from earlier
function showExampleMessage(id, message) {
    console.log(`Changing text content of elements with ID '${id}' to '${message}'`)
    document.getElementById(id).textContent = message;
}

// Function expression - assign a function to a variable, and use the variable to call the function
let fn = function () {
    // Code goes here
}

let fn2 = function namedFunction () {
    // Can name this function so it shoes up in logging better
}

fn();
let result = fn2(); // will be undefined, as there was no return value