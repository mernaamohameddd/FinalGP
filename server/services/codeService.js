const CodeModel = require('../models/Code');
const RegisterModel = require('../models/Register');
const fs = require('fs');
const path = require('path');
const { ESLint } = require('eslint');
const plato = require('plato');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const Mocha = require('mocha');
const { writeFile } = require('fs').promises;
//C++ imports
const exec = util.promisify(require('child_process').exec);

module.exports.postCodeService = async (codeInfo) => {
  try {
    const modelInstance = new CodeModel({
      sourceCode: codeInfo.sourceCode,
    });
    const createdCode = await modelInstance.save();
    
    return createdCode;
  } catch (err) {
    console.log(err);
    //  throw new Error('Cant get to code');
  }
};

module.exports.find = async () => {
  try {
    const code = await CodeModel.find();
    return code;
  } catch (err) {
    throw new Error('Can not retrieve code');
  }
};

// let fileCounter = 0;
// module.exports.covertCodeService = async (codeInfo) => {
//   try {
//     const filename = `temp.js`;
//     const sourceCode = codeInfo.sourceCode;

//     fs.writeFile(path.join(__dirname, filename), sourceCode, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(`Data saved to ${filename}`);

//         // Analyze the code using Plato
//         const outputDir = path.join(__dirname, 'plato-output');
//         const files = [path.join(__dirname, filename)];
//         const options = {
//           title: 'My Plato Report',
//           recurse: true
//         };
//         plato.inspect(files, outputDir, options, function(err, report) {
//           if (err) throw err;
//           console.log(err);
//           console.log('Plato report generated:', report);
//         });
//       }
//     });

//   } catch (err) {
//     console.log(err);
//     // throw new Error('Can't save code');
//   }
// };

///////////////////////////////////JavaScript///////////////////////////////

module.exports.covertCodeService = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;

    await writeFileAsync(path.join('public', filename), sourceCode);

    console.log(`Data saved to ${filename} plato`);

    const outputDir = path.join('public', 'plato-output');
    const files = [path.join('public', filename)];
    const options = {
      title: 'Code Analysis Report',
      recurse: true,
    };
    const report = await new Promise((resolve, reject) => {
      plato.inspect(files, outputDir, options, function (report) {
        resolve(report);
      });
    });

    console.log('Plato report generated:', report);
    return report;
  } catch (err) {
    console.error(err);
  }
};

//ESLint
// module.exports.EsLinterService = async (codeInfo) =>
// {
// try {
//     const eslint = new ESLint();
//     // const sourceCode = codeInfo.sourceCode.toString();

//     const results = await eslint.lintFiles("public/temp.js");

//     const formatter = await eslint.loadFormatter("json");
//     const resultText = formatter.format(results);
//     const fileContent = resultText;

// fs.writeFile('public/lintingResults.json', fileContent, (err) => {
//   if (err) throw err;
//   console.log('linting results saved to file');
// });
//     const jsonData = fs.readFileSync('public/lintingResults.json', 'utf8');
//     const LintingData = JSON.parse(jsonData);
//     const messages = LintingData[0].messages;
//     console.log(messages);
//     return(messages);
//     // console.log(resultText);
//     // return(resultText);

// } catch (err) {
//     console.log(err);

//   }
// };

module.exports.EsLinterService = async (codeInfo) => {
  try {
    const eslint = new ESLint();
    const sourceCode = codeInfo.sourceCode.toString();

    const results = await eslint.lintText(sourceCode);

    const formatter = await eslint.loadFormatter('html');
    const resultText = formatter.format(results);
    const fileContent = resultText.replace(
      /ESLint Report/g,
      'Code Style Feedback'
    );

    fs.writeFile('public/lintingResults.html', fileContent, (err) => {
      if (err) throw err;
      console.log('linting results saved to file');
    });
    // console.log(resultText);
    return resultText;
  } catch (err) {
    console.log(err);
  }
};

module.exports.testCodeService = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;

    await writeFileAsync(filename, sourceCode);

    console.log(`Data saved to ${filename} test1`);

    const mocha = new Mocha();
    mocha.addFile('test/temp.test.js');

    return new Promise((resolve) => {
      //resolve -> return value, reject -> throw error
      mocha.run((failures) => {
        //mocha.run msh by-run fe sa3tha 3shan bakhod call back function byt3mlha run lma el test ykhlas. El failures parameters lel call back function
        if (failures > 0) {
          console.log('Tests failed');
          resolve(false);
        } else {
          console.log('All tests passed');
          resolve(true);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.testCodeService2 = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;
    await writeFileAsync(filename, sourceCode);

    console.log(`Data saved to ${filename}`);

    const mocha = new Mocha();
    mocha.addFile('test/temp2.test.js');

    return new Promise((resolve) => {
      //resolve -> return value, reject -> throw error
      mocha.run((failures) => {
        //mocha.run msh by-run fe sa3tha 3shan bakhod call back function byt3mlha run lma el test ykhlas. El failures parameters lel call back function
        if (failures > 0) {
          console.log('Tests failed');
          resolve(false);
        } else {
          console.log('All tests passed');
          resolve(true);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.testCodeService3 = async (codeInfo) => {
  try {
    const filename = `temp.js`;
    const sourceCode = codeInfo.sourceCode;
    await writeFileAsync(filename, sourceCode);

    console.log(`Data saved to ${filename}`);

    const mocha = new Mocha();
    mocha.addFile('test/temp3.test.js');

    return new Promise((resolve) => {
      //resolve -> return value, reject -> throw error
      mocha.run((failures) => {
        //mocha.run msh by-run fe sa3tha 3shan bakhod call back function byt3mlha run lma el test ykhlas. El failures parameters lel call back function
        if (failures > 0) {
          console.log('Tests failed');
          resolve(false);
        } else {
          console.log('All tests passed');
          resolve(true);
        }
      });
    });
  } catch (err) {
    console.log(err);
  }
};

///////////////////////////////////C++///////////////////////////////
/*module.exports.covertCodeServiceCPlusPlus = async (codeInfo) => {
  try {
    const filename = `temp.cpp`;
    const sourceCode = codeInfo.sourceCode;

    //await writeFileAsync(path.join('public', filename), sourceCode);
    const fullPath = path.join(__dirname, '..', 'public', filename);
    //console.log(`covertCplus: Running cppcheck on: ${filename}`);
    await writeFile(fullPath, sourceCode);
    //console.log(`Data saved to ${fullPath}`);

    //const cppcheckResults1 = await runCppcheck(filename);
     //const cppcheckResults2 = codeInfo.sourceCode;
     //console.log('Cppcheck report:', cppcheckResults1);
    
    //console.log('code saved into file, this is the service');
    const command = `clang --analyze "${fullPath}"`;
    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error.message}`);
          reject({error: stderr || error.message});
          return;
        }

        resolve({ output: stderr || stdout }); // Clang output is typically in stderr
      });
    });
  } catch (err) {
    console.error('Error during Clang analysis:', err);
    throw new Error('Failed to execute Clang analysis.');
  }
};*/

/*module.exports.extractBinarySearchFunction = async () => {
  const sourceFilePath = path.join(__dirname, '..', 'temp.cpp');
  const destFilePath = path.join(__dirname, '..', 'binarySearch.cpp');

  try {
    const sourceCode = await fs.promises.readFile(sourceFilePath, 'utf8');
    console.log('Source Code:', sourceCode); // Log the source code for debugging

    // Improved regular expression to handle nested braces and capture the function body accurately
    const binarySearchRegex = /int\s+binarySearch\s*\([^)]*\)\s*\{(?:[^{}]*|\{(?:[^{}]*|\{[^{}]*\})*\})*\}/gs;
    const match = sourceCode.match(binarySearchRegex);

    if (match) {
      const binarySearchFunction = match[0];
      await fs.promises.writeFile(destFilePath, binarySearchFunction);
      console.log('Binary search function extracted and saved to binarySearch.cpp');
      return binarySearchFunction;
    } else {
      throw new Error('binarySearch function not found in temp.cpp');
    }
  } catch (err) {
    console.error('Error extracting binary search function:', err);
    throw err;
  }
};*/
module.exports.extractBinarySearchFunction = async () => {
  const sourceFilePath = path.join(__dirname, '..', 'temp.cpp');
  const destFilePath = path.join(__dirname, '..', 'binarySearch.cpp');

  try {
    const sourceCode = await fs.promises.readFile(sourceFilePath, 'utf8');
    console.log('Source Code:', sourceCode); // Log the source code for debugging

    // Improved regular expression to handle nested braces and capture the function body accurately
    const binarySearchRegex = /int\s+binarySearch\s*\([^)]*\)\s*\{(?:[^{}]*|\{(?:[^{}]*|\{[^{}]*\})*\})*\}/gs;
    const match = sourceCode.match(binarySearchRegex);

    if (match) {
      const binarySearchFunction = match[0];
      const finalContent = `#include "binarySearch.h"\n\n${binarySearchFunction}`;
      await fs.promises.writeFile(destFilePath, finalContent);
      console.log('Binary search function extracted and saved to binarySearch.cpp');
      return binarySearchFunction;
    } else {
      throw new Error('binarySearch function not found in temp.cpp');
    }
  } catch (err) {
    console.error('Error extracting binary search function:', err);
    throw err;
  }
};


/*module.exports.covertCodeServiceCPlusPlus = async (codeInfo) => {
  try {
    const filename = 'temp.cpp';
    const fullPath = path.join(__dirname, '..', filename);
    // Save the source code to a temporary file
    await fs.promises.writeFile(fullPath, codeInfo.sourceCode);
    console.log(`Data saved to ${filename}`);
    const tempVariable=await module.exports.extractBinarySearchFunction();
    console.log('Extracted Function:', tempVariable);
    const command = `clang --analyze "${fullPath}"`;

    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          const errorMsg = stderr || stdout || error.message;
          reject(new Error(`Clang analysis failed: ${errorMsg}`)); // Return detailed error message
          return;
        }

        resolve({ output: stderr || stdout }); // Return Clang output
      });
    });
  } catch (err) {
    console.error('Error during Clang analysis:', err);
    throw new Error('Failed to execute Clang analysis.');
  }
};
*/



module.exports.covertCodeServiceCPlusPlus = async (codeInfo) => {
  try {
    const filename = 'temp.cpp';
    const fullPath = path.join(__dirname, '..', filename);
    // Save the source code to a temporary file
    await fs.promises.writeFile(fullPath, codeInfo.sourceCode);
    console.log(`Data saved to ${filename}`);

    const tempVariable = await module.exports.extractBinarySearchFunction();
    console.log('Extracted Function:', tempVariable);

    const command = `clang --analyze "${fullPath}"`;

    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          const errorMsg = extractErrorMessage(stderr || stdout || error.message);
          reject(new Error(`Analysis failed, ${errorMsg}`)); // Return detailed error message
          return;
        }

        resolve({ output: stderr || stdout }); // Return Clang output
      });
    });
  } catch (err) {
    console.error('Error during Clang analysis:', err);
    throw new Error('Failed to execute Clang analysis.');
  }
};
const extractErrorMessage = (errorMsg) => {
  const regex = /temp\.cpp:(\d+):(\d+): error: (.*)/g;
  let extractedErrors = '';
  let match;
  let isFirstError = true;
  while ((match = regex.exec(errorMsg)) !== null) {
    const lineNumber = match[1];
    const columnNumber = match[2];
    const errorMessage = match[3];
    if (isFirstError) {
      extractedErrors += 'Try to modify the error and recompile again:\n';
      isFirstError = false;
    }
    extractedErrors += `${lineNumber}:${columnNumber} - ${errorMessage}\n`;
  }
  return extractedErrors.trim();
};





/*module.exports.runCppcheck = async () => {
  return new Promise((resolve) => {
   // const filename = 'temp.cpp';
    //const command = `cppcheck ${filename} --quiet --output-file=cppcheck-report.txt`;

    const filename = path.join(__dirname, '..', 'public', 'temp.cpp');
   
    if (!require("fs").existsSync(filename)) {
      resolve({ error: `File ${filename} does not exist` });
      throw new Error('Invalid file path');
      //return; // Early exit if the file doesn't exist
    }

   
    //console.log(`runcppcheck: Running cppcheck on: ${filename}`);
    const command = `cppcheck "${filename}" --enable=all`;

    //console.log(`Running command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Cppcheck command error: ${error.message}`);
        resolve({ error: error.message });
        return; // Stop further execution if there's an error
      }
    
      if (stderr && stderr.trim() !== "") {
        console.error(`Cppcheck error output: ${stderr}`);
        resolve({ error: stderr });
        return; // Stop further execution if there's an error
      }

      if (stdout && stdout.trim() === "") {
        resolve({ message: 'No significant issues found by cppcheck' });
        return; // No errors found
      }

      console.log(`Cppcheck command output: ${stdout}`);
      resolve({ output: stdout });
    });
  });
};
*/

module.exports.runCppcheck = async () => {
  try {
    const filename = path.join(__dirname, '..', 'public','temp.cpp');

    if (!fs.existsSync(filename)) {
      throw new Error(`File ${filename} does not exist.`);
    }

    const command = `cppcheck "${filename}" --enable=all`;

    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          reject({ error: error.message });
          return;
        }

        if (stderr && stderr.trim() !== "") {
          resolve({ error: stderr });
          return;
        }

        resolve({ output: stdout.trim() });
      });
    });
  } catch (err) {
    console.error(err);
    throw new Error('Cppcheck analysis failed.');
  }
};

/*module.exports.testCodeServiceCPlusPlus = async () => {
  try {
    // Compile the C++ code
    const compileCommand = 'g++ -o test_executable temp.cpp test_cases.cpp';
    await new Promise((resolve, reject) => {
        exec(compileCommand, (error, stdout, stderr) => {
            if (error) {
                console.error('Compilation failed:', stderr);
                reject('Compilation failed');
            } else {
                console.log('Compilation successful');
                resolve();
            }
        });
    });

    // Run the compiled executable
    const testCommand = './test_executable';
    await new Promise((resolve, reject) => {
        exec(testCommand, (error, stdout, stderr) => {
            if (error) {
                console.error('Tests failed:', stderr);
                reject('Tests failed');
            } else {
                console.log('Tests passed');
                resolve();
            }
        });
    });

    return { success: true, message: 'Tests passed' };
} catch (error) {
    return { success: false, message: error };
}
};*/
module.exports.testCodeServiceCPlusPlus = async () => {
  try {
    const testCasesPath = path.join(__dirname, '..', 'test_cases.cpp');
    const binarySearchPath = path.join(__dirname, '..', 'binarySearch.cpp');
    const binarySearchHeaderPath = path.join(__dirname, '..', 'binarySearch.h');

    if (!fs.existsSync(binarySearchHeaderPath)) {
      throw new Error('binarySearch.h not found');
    }

    const compileCommand = `g++ -o test_executable ${testCasesPath} ${binarySearchPath}`;
    await new Promise((resolve, reject) => {
      exec(compileCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('Compilation failed');
          reject('Compilation failed: ${stderr}');
        } else {
          console.log('Compilation successful');
          resolve();
        }
      });
    });

    const testCommand = '.\\test_executable.exe';
    await new Promise((resolve, reject) => {
      exec(testCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('Tests failed:', stderr);
          reject('Tests failed');
        } else {
          console.log('Code Logic Passed');
          console.log(stdout);  // Output the test results
          resolve(stdout);  // Return the stdout output
        }
      });
    });

    return { success: true, message: 'Code Logic passed' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};



///////////////////For second example/////////////
module.exports.extractCalculateAverageFunction = async () => {
  const sourceFilePath = path.join(__dirname, '..', 'temp2.cpp');
  const destFilePath = path.join(__dirname, '..', 'calculateAverage.cpp');

  try {
    const sourceCode = await fs.promises.readFile(sourceFilePath, 'utf8');
    console.log('Source Code:', sourceCode); // Log the source code for debugging

    // Regular expression to capture the calculateAverage function
    const calculateAverageRegex = /double\s+calculateAverage\s*\([^)]*\)\s*\{(?:[^{}]*|\{(?:[^{}]*|\{[^{}]*\})*\})*\}/gs;
    const match = sourceCode.match(calculateAverageRegex);

    if (match) {
      const calculateAverageFunction = match[0];
      const finalContent = `#include "calculateAverage.h"\n\n${calculateAverageFunction}`;
      await fs.promises.writeFile(destFilePath, finalContent);
      console.log('CalculateAverage function extracted and saved to calculateAverage.cpp');
      return calculateAverageFunction;
    } else {
      throw new Error('calculateAverage function not found in temp.cpp');
    }
  } catch (err) {
    console.error('Error extracting calculateAverage function:', err);
    throw err;
  }
};

module.exports.covertCodeServiceCPlusPlus2 = async (codeInfo) => {
  try {
    const filename = 'temp2.cpp';
    const fullPath = path.join(__dirname, '..', filename);
    // Save the source code to a temporary file
    await fs.promises.writeFile(fullPath, codeInfo.sourceCode);
    console.log(`Data saved to ${filename}`);

    const tempVariable = await module.exports.extractCalculateAverageFunction();
    console.log('Extracted Function:', tempVariable);

    const command = `clang --analyze "${fullPath}"`;

    return new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          const errorMsg = stderr || stdout || error.message;
          reject(new Error(`Clang analysis failed: ${errorMsg}`)); // Return detailed error message
          return;
        }

        resolve({ output: stderr || stdout }); // Return Clang output
      });
    });
  } catch (err) {
    console.error('Error during Clang analysis:', err);
    throw new Error('Failed to execute Clang analysis.');
  }
};

module.exports.testCodeServiceCPlusPlus2 = async () => {
  try {
    const testCasesPath = path.join(__dirname, '..', 'test_cases2.cpp');
    const binarySearchPath = path.join(__dirname, '..', 'calculateAverage.cpp');
    const binarySearchHeaderPath = path.join(__dirname, '..', 'calculateAverage.h');

    if (!fs.existsSync(binarySearchHeaderPath)) {
      throw new Error('binarySearch.h not found');
    }

    const compileCommand = `g++ -o test_executable ${testCasesPath} ${binarySearchPath}`;
    await new Promise((resolve, reject) => {
      exec(compileCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('Compilation failed');
          reject('Compilation failed');
        } else {
          console.log('Compilation successful');
          resolve();
        }
      });
    });

    const testCommand = '.\\test_executable.exe';
    await new Promise((resolve, reject) => {
      exec(testCommand, (error, stdout, stderr) => {
        if (error) {
          console.error('Tests failed:', stderr);
          reject('Tests failed');
        } else {
          console.log('Tests passed');
          console.log(stdout);  // Output the test results
          resolve(stdout);  // Return the stdout output
        }
      });
    });

    return { success: true, message: 'Tests passed' };
  } catch (error) {
    return { success: false, message: error.message };
  }
};


//////////////////////////Register to the course//////////////////////////
module.exports.enrollStudent = async (registerInfo) => {
  try {
    const register = new RegisterModel({
      fullName: registerInfo.fullName,
      email: registerInfo.email,
      selectedCourse: registerInfo.selectedCourse,
    });
    /*const createdRegister=await RegisterModel.create(register);
    return createdRegister;*/
    await register.save();
  } catch (err) {
    console.error(err);
    throw new Error('Could not create register.');
  }
};
