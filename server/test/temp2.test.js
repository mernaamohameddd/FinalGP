const assert = require('assert');
const fs = require('fs');
const { NodeVM } = require('vm2');

let codeInput = fs.readFileSync('public/temp.js', 'utf8');

codeInput += '\nmodule.exports = sum(2, 3);';
describe('public/temp.js', () => {
  it('should return the sum of the two numbers', () => {
    const vm = new NodeVM();
    const sum = vm.run(codeInput + '; module.exports;');
    assert.strictEqual(sum, 5);
  });
});