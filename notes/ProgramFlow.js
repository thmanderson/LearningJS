// Notes for Program Flow from PluralSight course

// == vs === - === is exactly equivalent, == will convert types
let notTrue = 1 === "1",
    isTrue = 1 == "1";


if (true) {
    // Using var over let is bad practice (const would also work as expected)
    var badVariable = 'is available outside of this code block';
    let goodVariable = 'is not available outside of this code block';
}