const codeService = require('../services/codeService');
const { validationResult } = require('express-validator');

module.exports.postCode = async (req, res) => {
  const validationErrors = validationResult(req).array();
  if (validationErrors.length > 0) {
    const firstError = validationErrors[0];
    return res.status(422).send({
      error: firstError.msg,
    });
  }
  const data = {
    sourceCode: req.body.sourceCode,
  };
  try {
    const createdCode = await codeService.postCodeService(data);

    return res.status(201).send({
      msg: 'code uploaded successfully!',
      codeID: createdCode._id,
    });
    // console.log(req.body.sourceCode));
  } catch (err) {
    //return res.status(500).send({error: err.message});
    console.log(err);
  }
};

module.exports.getCode = async (req, res) => {
  try {
    const code = await codeService.find();
    res.send({ code });
  } catch (err) {
    res.status(500);
    res.send({
      error: err,
    });
  }
};

//////////////////////////JavaScript//////////////////////
module.exports.covertCodeToJS = async (req, res) => {
  const data = {
    sourceCode: req.body.sourceCode,
  };
  try {
    const plato = await codeService.covertCodeService(data);

    return res.status(201).send({
      msg: 'code saved into file successfully!',
      plato,
    });
    // console.log(req.body.sourceCode));
  } catch (err) {
    console.log(err);
  }
};

module.exports.EslinterController = async (req, res) => {
  const data = {
    sourceCode: req.body.sourceCode,
  };

  try {
    const results = await codeService.EsLinterService(data);
    return res.status(201).send({
      msg: 'code linted',
      results,
    });
  } catch (err) {
    //return res.status(500).send({error: err.message});
    console.log(err);
  }
};

module.exports.testCodeController = async (req, res) => {
  const data = {
    sourceCode: req.body.sourceCode,
  };

  try {
    const isSuccess = await codeService.testCodeService(data);
    console.log(isSuccess);
    return res.status(201).send({
      isSuccess,
    });
  } catch (err) {
    //return res.status(500).send({error: err.message});
    console.log(err);
  }
};

module.exports.testCodeController2 = async (req, res) => {
  const data = {
    sourceCode: req.body.sourceCode,
  };

  try {
    const isSuccess = await codeService.testCodeService2(data);
    console.log(isSuccess);
    return res.status(201).send({
      isSuccess,
    });
  } catch (err) {
    //return res.status(500).send({error: err.message});
    console.log(err);
  }
};

module.exports.testCodeController3 = async (req, res) => {
  const data = {
    sourceCode: req.body.sourceCode,
  };

  try {
    const isSuccess = await codeService.testCodeService3(data);
    console.log(isSuccess);
    return res.status(201).send({
      isSuccess,
    });
  } catch (err) {
    console.log(err);
  }
};

////////////////////////C++/////////////////////////////
/*module.exports.covertCodeToCPlusPlus = async (req, res) => {
  const data = {
    sourceCode: req.body.sourceCode,
  };
  try {
    const cppcheckResults = await codeService.covertCodeServiceCPlusPlus(data);

    return res.status(201).send({
      msg: 'Code saved into file successfully!',
      cppcheckResults,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
};*/

module.exports.covertCodeToCPlusPlus = async (req, res) => {
  try {
    const data = {
      sourceCode: req.body.sourceCode,
    };
    const clangResults = await codeService.covertCodeServiceCPlusPlus(data);

    res.status(201).json({
      msg: 'Clang analysis completed!',
      clangResults, // Return the results
    });
  } catch (err) {
    console.error('Error during Clang analysis:', err);
    res.status(500).json({ error: err.message }); // Send the error message to the client
  }
};

module.exports.cppcheckController = async (req, res) => {
  // const data = {
  //   sourceCode: req.body.sourceCode,
  // };
  try {
    const additionalCppAnalysis = await codeService.runCppcheck();

    return res.status(201).send({
      msg: 'Additional C++ analysis completed!',
      additionalCppAnalysis,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
};



/*module.exports.testCode = async (req, res) => {
  const data = {
    sourceCode: req.body.sourceCode,
  };

  try {
    const isSuccess = await codeService.testCodeServiceCPlusPlus(data);
    res.status(200).json({ message: 'Tests passed', output: result });
    console.log(isSuccess);
    return res.status(201).send({
      isSuccess,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Test failed', error: error.message });
  }
};*/

module.exports.testCode = async (req, res) => {
  try {
    const result = await codeService.testCodeServiceCPlusPlus();
    res.json(result);
} catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
}
};


///////////////////For second example
module.exports.covertCodeToCPlusPlus2 = async (req, res) => {
  try {
    const data = {
      sourceCode: req.body.sourceCode,
    };
    const clangResults = await codeService.covertCodeServiceCPlusPlus2(data);

    res.status(201).json({
      msg: 'Clang analysis completed!',
      clangResults, // Return the results
    });
  } catch (err) {
    console.error('Error during Clang analysis:', err);
    res.status(500).json({ error: err.message }); // Send the error message to the client
  }
};

module.exports.cppcheckController2 = async (req, res) => {
  try {
    const additionalCppAnalysis = await codeService.runCppcheck();

    return res.status(201).send({
      msg: 'Additional C++ analysis completed!',
      additionalCppAnalysis,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ error: err.message });
  }
};

module.exports.testCode2 = async (req, res) => {
  try {
    const result = await codeService.testCodeServiceCPlusPlus2();
    res.json(result);
} catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
}
};


///////////////////////////////Register to course////////////////////
module.exports.enrollStudent = async (req, res) => {
  try {
    const data = {
      fullName: req.body.fullName,
      email: req.body.email,
      selectedCourse: req.body.selectedCourse,
    };
    const createdCode = await codeService.enrollStudent(data);
    return createdCode;
    /* return res.status(201).send({
      msg: 'registration is successfully!',
      registerID: createdCode._id,
    });*/
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: err.message });
  }
};
