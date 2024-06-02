const { Schema, model} = require('mongoose');

const registerSchema = new Schema({
  fullName: {
    type: 'String',
    required: true,
  },
  email: {
    type: 'String',
    required: true,
  },
  selectedCourse: {
    type: 'String',
    required: true,
  },
});

const register = model('register', registerSchema);
module.exports = register;
