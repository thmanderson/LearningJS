// Notes for Objects and the DOM (Document Object Model) from PluralSight course

let myObject = {
    myNum: 0,
    myStr: "Hello",
    myBool: true,
    myFunction: function() {
        console.log('object function: ' + this.myStr);
    },
    [mySymbol]: 'secretInformation'
};

console.log(myObject.myMethod());
console.log(myObject['myNum']);

// Lots of built-in objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// DOM: Using 'document' object, e.g. document.getElementById('');
// MDN Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// HTML Elements: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
// Can style with code instead of CSS if needed
const header = document.getElementById('myElement');
header.style.color = '#FFF';
header.style.fontWeight = '100';

// Button clicks - Hide an element, change button text, and log a click
const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    console.log('click');
    const myOtherElement = document.getElementById('elementToHide');
    if (myOtherElement.classList.contains('d-none')){
        myOtherElement.classList.remove('d-none');
        button.textContent = 'Hide Element';
    }
    else {
        myOtherElement.classList.add('d-none');
        button.textContent = 'Show Element';
    }
});



