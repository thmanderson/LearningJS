// Scope and Hoisting notes for Pluralsight

// Global Scope
// Common to define an 'app' variable for global values to avoid confusion
let app = {
    appId: 12345,
    siteName: 'Learning JavaScript'
};

// Function Scope
// Can have variables scoped globally and in a function, function will try to find a local one, and then check global

// Undeclared Variables and Strict Mode
'use strict';