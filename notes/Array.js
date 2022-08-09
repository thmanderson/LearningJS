// Notes for Arrays from PluralSight course
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let myArray = [0,1,2,3,4];
let myOtherArray = Array.of(0, 1, 2, 3, 4);

let myOtherOtherArray = new Array(5);
for (let i = 0; i < myOtherOtherArray.length(); i++){
    myOtherArray[i] = i;
}

let values = ['a', 'b', 'c'];
console.log(values.pop()); // returns 'c'
values.push('d'); // adds to the end

const first = values.shift(); // first == 'a', values = ['b','c','d']
values.unshift(first); // add it back on

let sliceTest = values.slice(1, 2); // returns ['b'], value at position 2 is not included, does not alter values
values.splice(2, 1); // deletes 1 item starting from position 2, 'c'
values.splice(2, 1, 'x'); // replaces 1 item at position 2 ('c') with 'x'
values.splice(1, 0, 'x'); // deletes 0 items from position 1, and inserts 'x'

console.log(values.indexOf('a')); // 0


const set = values.filter(function(item) {
    return item > 'b';
});


const found = values.find(function(item) {
    return item.length > 1;
});

values.forEach(function(item) {
    console.log(item);
});

let containers = document.getElementsByClassName('container');
console.log(typeof(containers));
console.log(containers);
//containers[0].classList.add('d-none');
