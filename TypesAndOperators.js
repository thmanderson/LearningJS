// Notes for Types & Operators from PluralSight course

// Variables:
// Variable names must start with _, $, or a letter - cannot be a number.
// Usually _variableName is for private variables, $ is for auto-generated usually (probably don't use).
// Use 'let' instead of 'var' - not as good for catching errors, e.g. if not initialised.

//let variableName = value;
let total = 100;
total = 99;
total -= 5;
total++;

let someWords = "Hello",
    someMoreWords = 'Something else';

let someBoolean = true;

const theAnswer = 42;

let myVariableType = typeof someWords;

// Strings
let firstName = 'Tom';
    lastName = 'Anderson';
let message = `Hello ${firstName}`;
    fullName = firstName + lastName;

// Conversions
let theAnswerWord = theAnswer.toString();
let someAmount = Number.parseFloat("123.45");

let someVariable;
// someVariable is undefined
someVariable = null;
// null is for intentionally removing a value, undefined is usually a mistake

// Objects
let person = {
    firstName: 'John',
    lastName: 'Adams'
}