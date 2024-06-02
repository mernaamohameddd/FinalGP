const { check }= require('express-validator');

module.exports.validatePostReq =() =>
{
    const validationMiddlewares = [
         check("sourceCode").notEmpty().withMessage('code is empty')
       
    ];
    return validationMiddlewares;
}