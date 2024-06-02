const { Schema, model} = require('mongoose');

const CodeSchema = new Schema({
 
    sourceCode:{
        type: String
    }
});
const CodeModel = model('code', CodeSchema);
module.exports = CodeModel;