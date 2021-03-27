const assert = require('assert');

//WRITE THE CODE HERE 



// Check that capitalizeFirst is a function

assert.strictEqual(typeof capitalizeFirstLetters, 'function');


// Check that capitalizeFirst accepts one argument

assert.strictEqual(capitalizeFirstLetters.length, 1);


// Check that capitalizeFirst transforms multiple-word string

assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');


// Check that it works for a 1-word string

assert.strictEqual(capitalizeFirstLetters('learning'), 'Learning');


// Check that it works for an empty string

assert.strictEqual(capitalizeFirstLetters(''), '');





