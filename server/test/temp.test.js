const assert = require('assert');
const fs = require('fs');
const { NodeVM } = require('vm2');
const codeInput = `
${fs.readFileSync('public/temp.js', 'utf8')}
const result = binarySearch(arr, target);
module.exports = result;
`;

describe('Binary Search', () => {
  it('should return the index of the target value in the sorted array', () => {
    const vm = new NodeVM();
    const result = vm.run(codeInput);
    assert.strictEqual(result, 4);
  });
});
