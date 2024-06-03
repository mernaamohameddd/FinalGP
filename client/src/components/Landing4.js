import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CodeEditorWindow from './CodeEditorWindow';
import axios from 'axios';
import { classnames } from '../utils/general';
import { languageOptions } from '../constants/languageOptions';
import OutputWindow from './OutputWindow';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { defineTheme } from '../lib/defineTheme';
import useKeyPress from '../hooks/useKeyPress';
import OutputWindow2 from './OutputWindowCPlus';
import CustomInput from './CustomInput';
import OutputDetails2 from './OutputDetails2';
import ThemeDropdown from './ThemeDropdown';
import LanguagesDropdown from './LanguagesDropdown';

const cplusplusDefault = `/**
* Problem: Binary Search: Search a sorted array for a target value.
*/

#include <iostream>

// Function to implement binary search
int binarySearch(const int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;  // Found the target at index mid
        }
        else if (arr[mid] < target) {
            left = mid + 1;  // Target is in the right half
        }
        else {
            right = mid - 1;  // Target is in the left half
        }
    }

    return -1;  // Target not found in the array
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 5;

    int result = binarySearch(arr, size, target);

    if (result != -1) {
        std::cout << "Target " << target << " found at index " << result << "." << std::endl;
    } else {
        std::cout << "Target " << target << " not found in the array." << std::endl;
    }

    return 0;
}

`;

const Landing4 = () => {
  const [code, setCode] = useState(cplusplusDefault);
  const [customInput, setCustomInput] = useState('');
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [theme, setTheme] = useState('cobalt');
  const [language, setLanguage] = useState(languageOptions[5]);
  const [clangLineNumbers,setClangLineNumbers]=useState(null);
  const [clangAnalysis, setClangAnalysis]=useState(null);
  const [testCaseResult, setTestCaseResult] = useState(null);
  const [data, setPlatoData] = useState(null);
  const [output, setOutput] = useState('');
  const enterPress = useKeyPress('Enter');
  const ctrlPress = useKeyPress('Control');
  const navigate = useNavigate();
  const onSelectChange = (sl) => {
    
    console.log('selected Option...', sl);
    setLanguage(sl);
    
    if (sl.name === 'JavaScript (Node.js 12.14.0)') {
        // Navigate to C++ page
        navigate('/Landing1');
      }
  };

  const handleSubmit = async () => {
    try {
      // Call the backend API to compile and execute the code
      await handleCompile();
      await handleSendSourceCode();
      switch (language.name) {
        case 'JavaScript (Node.js 12.14.0)':
          await handlePlato();
          await EslintCode();
          navigate(`/Landing`);
          break;
        case 'C++ (Clang 7.0.1)':
          console.log('C++');
          await handleCPP();
          await CppCode();
          navigate(`/Landing4`);
          break;
        
  
        default:
          // Default case
          break;
      }
      // Call the backend API to test the C++ code
      const response = await handleTestCasesCPlusPlus();
      
      // Update the state with the test case result
      setTestCaseResult(response.isSuccess);
      
      // Display a success message to the user
      showSuccessToast('Code execution and test completed successfully!');
    } catch (error) {
      // Handle any errors that occur during the process
      console.error('Error:', error.message);
      showErrorToast('An error occurred. Please try again later.');
    }
  };
  

  
  useEffect(() => {
    if (enterPress && ctrlPress) {
      console.log('enterPress', enterPress);
      console.log('ctrlPress', ctrlPress);
      handleSubmit();
    }
  }, [ctrlPress, enterPress]);

  const onChange = (action, data) => {
    switch (action) {
      case 'code': {
        setCode(data);
        break;
      }
      default: {
        console.warn('case not handled!', action, data);
      }
    }
  };
  const handleCompile = async () => {
    setProcessing(true);
    const formData = {
      language_id: language.id,
      // encode source code in base64
      source_code: btoa(code),
      stdin: btoa(customInput),
    };

    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'content-type': 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': '57a99261dcmshb4c8d406da1873bp1e28bbjsna091b6098ace',
      },
      data: formData,
    };
    return axios
      .request(options)
      .then(function(response) {
        console.log('res.data', response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log('status', status);
        if (status === 429) {
          console.log('too many requests', status);

          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log('catch block...', error);
      });
  };

  ////////////////////////////////////////////Sending code to REST API///////////////////////////////////////////////

  const handleSendSourceCode = async () => {
    //  const encodedSourceCode = btoa(code);
    try {
      const response = await fetch('http://localhost:3001/code/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceCode: code }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw Error(data.error);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  /////////////////////////////////////CODALYZE/////////////////////////////////////////

  const sendTocodalyze = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/analyze/js', {
        method: 'POST',
        body: JSON.stringify({
          html: code,
          threshold: {
            cyclomatic_complexity: 200,
            lines_of_code: 50,
            parameter_count: 4,
          },
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.error);
      }

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  ////////////////////////////// ASYNC FUNCTIONS ///////////////////////////////////

  const handleTestCases = async () => {
    const testCaseResult = await handleTestCasesCPlusPlus();
    console.log(testCaseResult, 'mernaa');
    setTestCaseResult(testCaseResult.isSuccess);
  };

  const handlePlato = async () => {
    const data = await sendToJSFile();
    setPlatoData(data);
    console.log(data);
  };

  /*const handleJava = async () => {
    const data = await sendToJavaFile();
    setPlatoData(data);
    console.log(data);
  };*/

  const handleCPP = async () => {
    setProcessing(true);
    try {
      const response = await axios.post('http://localhost:3001/code/CPlusFile', {
        sourceCode: code,
      });
  
      setClangAnalysis(response.data.clangResults.output || "Your Code is Correct, Compilation Successfully");
      
      toast.success('Clang analysis completed!');
    } catch (err) {
      console.error('Error during Clang analysis:', err);
      const errorMsg = err.response?.data?.error || 'Unknown error';
      setClangAnalysis(errorMsg);
      toast.error('Clang analysis failed!');
    } finally {
      setProcessing(false);
    }
  };
  

  //////////////////////////////ESLINT//////////////////////////////////////////////////

  const EslintCode = async () => {
    // console.log('code:', code.toString());
    try {
      const response = await fetch('http://localhost:3001/code/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceCode: code.toString() }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw Error(data.error);
      }
      // console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //////////////////////////////CPPCHECK//////////////////////////////////////////////////

  const CppCode = async () => {
    // console.log('code:', code.toString());
    try {
      console.log("Reached 1");
      const response = await fetch('http://localhost:3001/code/Cresults', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceCode: code.toString() }),
      });
      const data = await response.json();
      console.log(data, 'el cpppppp check');
      if (!response.ok) {
        throw Error(data.error);
      }
      // console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

 
  /////////////////////////////BUTTON////////////////////////////////////////////////////

  const handleESLINTClick = () => {
    window.open('http://localhost:3001/lintingResults.html', '_blank');
  };

  const handlePlatoClick = () => {
    window.open('http://localhost:3001/plato-output/index.html', '_blank');
  };

  const btnOnClickHandler = () => {
    navigate(`/Landing5`);
  };

  const homePage = () => {
    navigate(`/`);
  };

  //////////////////////////////JS FILE//////////////////////////////////////////////////
  const sendToJSFile = async () => {
    try {
      const response = await fetch('http://localhost:3001/code/jsFile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceCode: code }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }
      // setPlatoData(data);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //////////////////////////////C++ FILE//////////////////////////////////////////////////
  const sendToCPlusPlusFile = async () => {
    try {
      const response = await fetch('http://localhost:3001/code/CPlusFile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceCode: code }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw Error(data.error);
      }
      // setPlatoData(data);
      console.log(data, 'resssssssssssponse');
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  
  //////////////////////////////////////////////////////////////////////////////////////

  const checkStatus = async (token) => {
    const options = {
      method: 'GET',
      url: 'https://judge0-ce.p.rapidapi.com/submissions' + '/' + token,
      params: { base64_encoded: 'true', fields: '*' },
      headers: {
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        'X-RapidAPI-Key': '57a99261dcmshb4c8d406da1873bp1e28bbjsna091b6098ace',
      },
    };
    try {
      let response = await axios.request(options);
      let statusId = response.data.status?.id;

      // Processed - we have a result
      if (statusId === 1 || statusId === 2) {
        // still processing
        setTimeout(() => {
          checkStatus(token);
        }, 2000);
        return;
      } else {
        setProcessing(false);
        setOutputDetails(response.data);
        showSuccessToast(`Compiled Successfully!`);
        console.log('response.data', response.data);
        return;
      }
    } catch (err) {
      console.log('err', err);
      setProcessing(false);
      showErrorToast();
    }
  };

  const handleTestCasesCPlusPlus = async () => {
    try {
      const response = await fetch('http://localhost:3001/code/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sourceCode: code }), // Pass the C++ code as the request payload
      });
  
      if (!response.ok) {
        throw new Error('Error running test cases');
      }
  
      const { success, message, errorLine } = await response.json();
  
      if (success) {
        console.log('Code Logic Passed');
        setTestCaseResult(true);
        setOutput(message);
        showSuccessToast('Code Logic Passed'); // Display success message
      } else {
        console.log('Code Logic Failed');
        setTestCaseResult(false);
        setOutput(`Code Logic Failed`); // Display error message
        showErrorToast(`Code Logic Failed`); // Display error message with error line
      }
    } catch (error) {
      console.error('Error running code logic:', error);
      showErrorToast('Error running code logic'); // Display error message
    }
  };
  
  
  
  

  function handleThemeChange(th) {
    const theme = th;
    console.log('theme...', theme);

    if (['light', 'vs-dark'].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme('oceanic-next').then((_) =>
      setTheme({ value: 'oceanic-next', label: 'Oceanic Next' })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showErrorToast = (msg, timer) => {
    toast.error(msg || `Something went wrong! Please try again.`, {
      position: 'top-right',
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCombined = async () => {
    await handleCPP();
    await CppCode();
  };

  const homePageUrl = '/';
  const assignmentsUrl = '/Landing1';
  const styles = `
    body {
      margin: 0;
      box-sizing: border-box;
    }

    /* CSS for header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color:black;
    }

    .header .logo {
      font-size: 25px;
      font-family: 'Sriracha', cursive;
      color: white;
      text-decoration: none;
      margin-left: 30px;
    }

    .nav-items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: black;
      margin-right: 20px;
    }

    .nav-items a {
      text-decoration: none;
      color: white;
      padding: 35px 20px;
    }
`;

return (
  <>
    <style>{styles}</style>
    <header className="header">
      <a href={homePageUrl} className="logo">CodePro</a>
      <nav className="nav-items">
        <a href={homePageUrl}>Home</a>
        <a href={assignmentsUrl}>Assignments</a>
      </nav>
    </header>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    <br />
    <h1 className="font-bold px-10 py-1 rounded-md bg-gray-100" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>
      Assignment 1: Search a sorted array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for a target value 5.
    </h1>
    <br />
    <div className="flex flex-row">
      <div className="px-4 py-2">
        <LanguagesDropdown onSelectChange={onSelectChange} selectedLanguage={language} />
      </div>
      <div className="px-4 py-2">
        <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
      </div>
    </div>
    <div className="flex flex-row space-x-4 items-start px-4 py-4">
      <div className="flex flex-col w-full h-full justify-start items-end">
        <CodeEditorWindow code={code} onChange={onChange} language={language?.value} theme={theme.value} />
      </div>
      
      <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
      <OutputWindow2 outputDetails={outputDetails} testCaseResult={testCaseResult} clangAnalysis={clangAnalysis} />
      
      
        <div className="flex flex-col items-end">
          <CustomInput customInput={customInput} setCustomInput={setCustomInput} />
          <div className={classnames('mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0', !code ? 'opacity-50' : '')}>
            <button onClick={handleCombined} disabled={processing}>{processing ? 'Processing...' : 'Compile'}</button>
          </div>

         
          
          <div>
            <div className={classnames('mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0', !code ? 'opacity-50' : '')}>
              <button onClick={handleTestCasesCPlusPlus}>Check the Logic</button>
            </div>
          </div>
          <div className={classnames('mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0')}>
            <button onClick={btnOnClickHandler}>Next Assignment</button>
          </div>
          <div className={classnames('mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0')}>
            <button onClick={homePage}>Home Page</button>
          </div>
        </div>
      </div>
    </div>
    <>
      <h4 style={{ fontWeight: 'bold', marginLeft: '20px', marginTop: '1px', fontSize: '1.4rem' }}>Code Logic Feedback</h4>
      <OutputDetails2 outputDetails={outputDetails} testCaseResult={testCaseResult} />
      

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
      {/* Rest of the component */}
    </>
      

      {/* <Footer /> */}
    </>
  );
};
export default Landing4;
	