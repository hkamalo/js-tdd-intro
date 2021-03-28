const assert = require('assert');
const capitalizeFirstLetters = require ('../capitalizeFirstLetters');

describe ('capitalizeFirstLetters', () => {
    
    it('is a function with one argument', () => {
        
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
        assert.strictEqual(capitalizeFirstLetters.length, 1);    
    });
    
    it ('transforms multiple-word string', () => {
        assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
    });
    
    
    it('works for a 1-word string', () =>{
        assert.strictEqual(capitalizeFirstLetters('learning'), 'Learning');
    });
    
    
    it('works for an empty string', () => { 
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });   
});