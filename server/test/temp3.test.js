const assert = require('assert');
const vm = require('vm');
const fs = require('fs');


const solutionCode = fs.readFileSync('public/temp.js', 'utf8');

describe('Product Inventory Management', () => {
  const sandbox = {
    module: {},
    require,
  };

  vm.createContext(sandbox);
  vm.runInContext(solutionCode, sandbox);

  function stringify(value) {
    return JSON.stringify(value, null, 2);
  }

  it('should create a product with the specified properties', () => {
    const result = sandbox.module.exports.createProduct(1, 'Product 1', 10, 5);
    assert.strictEqual(stringify(result), stringify({ id: 1, name: 'Product 1', price: 10, quantity: 5 }));
  });

  it('should add a product to the inventory', () => {
    sandbox.module.exports.addProduct({ id: 1, name: 'Product 1', price: 10, quantity: 5 });
    const result = sandbox.module.exports.getAllProducts();
    assert.strictEqual(stringify(result), stringify([{ id: 1, name: 'Product 1', price: 10, quantity: 5 }]));    
  });

  it('should update the information of an existing product', () => {
    sandbox.module.exports.updateProduct({ id: 1, name: 'Updated Product', price: 20, quantity: 10 });
    const result = sandbox.module.exports.getProductById(1);
    assert.deepStrictEqual(result, { id: 1, name: 'Updated Product', price: 20, quantity: 10 });
  });

  it('should get a product from the inventory based on its ID', () => {
    const result = sandbox.module.exports.getProductById(1);
    assert.strictEqual(stringify(result), stringify({ id: 1, name: 'Updated Product', price: 20, quantity: 10 }));
  });


  it('should get all products from the inventory', () => {
    const result = sandbox.module.exports.getAllProducts();
    assert.strictEqual(stringify(result), stringify([{ id: 1, name: 'Updated Product', price: 20, quantity: 10 }]));    
  });
});