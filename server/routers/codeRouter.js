const {Router} = require('express');
const codeController = require('../controllers/codeController');
const codeValid = require('../validators/codeValid');
const codeRouter = Router();



codeRouter.post('/post', 
codeValid.validatePostReq(),
codeController.postCode);

codeRouter.get('/getcode', codeController.getCode);
//////////Javascript
codeRouter.post('/jsFile', codeController.covertCodeToJS);
codeRouter.post('/testCode', codeController.testCodeController);
codeRouter.post('/testCode2', codeController.testCodeController2);
codeRouter.post('/testCode3', codeController.testCodeController3);
codeRouter.post('/results', codeController.EslinterController);
////////C++////////////
codeRouter.post('/CPlusFile',codeController.covertCodeToCPlusPlus);
codeRouter.post('/Cresults',codeController.cppcheckController);
codeRouter.post('/test', codeController.testCode);
codeRouter.post('/CPlusFile2',codeController.covertCodeToCPlusPlus2);
codeRouter.post('/Cresults2',codeController.cppcheckController2);
codeRouter.post('/test2', codeController.testCode2);


module.exports = codeRouter;