import React, { useEffect, useState } from "react";
import CodeEditorWindow from "./CodeEditorWindow";
import axios from "axios";
import { classnames } from "../utils/general";
import { languageOptions } from "../constants/languageOptions";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { defineTheme } from "../lib/defineTheme";
import useKeyPress from "../hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import CustomInput from "./CustomInput";
import OutputDetails from "./OutputDetails";
import ThemeDropdown from "./ThemeDropdown";
import LanguagesDropdown from "./LanguagesDropdown";







const javascriptDefault = `
`;

const Landing3 = () => {
  const [code, setCode] = useState(javascriptDefault);
  const [customInput, setCustomInput] = useState("");
  const [outputDetails, setOutputDetails] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [theme, setTheme] = useState("cobalt");
  const [language, setLanguage] = useState(languageOptions[0]);

  const [testCaseResult, setTestCaseResult] = useState();
  const [data, setPlatoData] = useState(null);

  const enterPress = useKeyPress("Enter");
  const ctrlPress = useKeyPress("Control");
  const navigate = useNavigate();
  const onSelectChange = (sl) => {
    console.log("selected Option...", sl);
    setLanguage(sl);
  };


  const handleSubmit = async () => {

    await handleCompile();
    await handleSendSourceCode();
    await EslintCode();

    await handlePlato();
    await handleTestCases();
  }

useEffect(() => {
  if (enterPress && ctrlPress) {
    console.log("enterPress", enterPress);
    console.log("ctrlPress", ctrlPress);
    handleSubmit();
  }
}, [ctrlPress, enterPress]);

  const onChange = (action, data) => {
    switch (action) {
      case "code": {
        setCode(data);
        break;
      }
      default: {
        console.warn("case not handled!", action, data);
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
      method: "POST",
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
        "X-RapidAPI-Key": '57a99261dcmshb4c8d406da1873bp1e28bbjsna091b6098ace',
      },
      data: formData,
    };
    return axios
      .request(options)
      .then(function (response) {
        console.log("res.data", response.data);
        const token = response.data.token;
        checkStatus(token);
      })
      .catch((err) => {
        let error = err.response ? err.response.data : err;
        // get error status
        let status = err.response.status;
        console.log("status", status);
        if (status === 429) {
          console.log("too many requests", status);
  
          showErrorToast(
            `Quota of 100 requests exceeded for the Day! Please read the blog on freeCodeCamp to learn how to setup your own RAPID API Judge0!`,
            10000
          );
        }
        setProcessing(false);
        console.log("catch block...", error);
      });
  
  };

////////////////////////////////////////////Sending code to REST API///////////////////////////////////////////////

const handleSendSourceCode = async () => {
  try {
    const start = performance.now();

    const response = await fetch('http://localhost:3001/code/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sourceCode: code }),
    });

    const end = performance.now();
    const duration = end - start;

    const data = await response.json();
    if (!response.ok) {
      throw Error(data.error);
    }
    console.log('Response:', data);
    console.log(`Response time: ${duration} milliseconds`);
  } catch (err) {
    console.log('Error:', err);
  }
};

//   const handleSendSourceCode = async () => {
//     //  const encodedSourceCode = btoa(code);
//     try{
//     const response = await fetch('http://localhost:3001/code/post',
//     {
//       method:'POST',
//       headers: {
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify({sourceCode: code})
//     });
//     const data = await response.json();
//     if(!response.ok)
//     {
//       throw Error(data.error);
//     }
//     console.log(data);

//   }catch(err)
//   {
//     console.log(err);
//   }
// };

  
/////////////////////////////////////CODALYZE/////////////////////////////////////////

const sendTocodalyze = async () =>
{
  try {
    const response = await fetch('http://127.0.0.1:8000/analyze/js', {
      method: 'POST',
      body: JSON.stringify({html: code, threshold: {"cyclomatic_complexity": 200,
      "lines_of_code": 50,
      "parameter_count": 4}}),
      headers: {
        'Content-Type': 'application/json'
      }
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
//////////////////////////////ESLINT ASYNC FUNCTION///////////////////////////////////
const handleTestCases = async () => {
  const testCaseResult = await testCasesCheck();
  console.log(testCaseResult, 'israa');
  setTestCaseResult(testCaseResult.isSuccess);
};

const handlePlato = async () => {
  const data = await sendToJSFile();
  setPlatoData(data);
  // console.log(data);
};
//////////////////////////////ESLINT//////////////////////////////////////////////////

const EslintCode = async() =>{
  // console.log('code:', code.toString());
  try{
      const response = await fetch('http://localhost:3001/code/results',
      {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({sourceCode:(code.toString())})
      });
      const data = await response.json();
      if(!response.ok)
      {
        throw Error(data.error);
      }
      console.log(data);
      return data;
     
  
    }catch(err)
    {
      console.log(err);
    }
};
/////////////////////////////BUTTON////////////////////////////////////////////////////

  const handleESLINTClick = () => {
    // window.open('http://localhost:3001/lintingResults.html');
    window.open("http://localhost:3001/lintingResults.html", "_blank");
  };

  const handlePlatoClick =() =>{
    window.open("http://localhost:3001/plato-output/index.html", "_blank");
  };
  
  const homePage = () => {
  
    navigate(`/`);
  };
//////////////////////////////JS FILE//////////////////////////////////////////////////
const sendToJSFile = async() =>{
  try{
    const response = await fetch('http://localhost:3001/code/jsFile',
    {
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({sourceCode: code})
    });
    const data = await response.json();
    if(!response.ok)
    {
      throw Error(data.error);
    }
    console.log(data);
    return data;
  }catch(err)
  {
    console.log(err);
  }
};
/////////////////////////////////////TEST CASES////////////////////////////////////////

const testCasesCheck = async () => {
  try {
    const response = await fetch('http://localhost:3001/code/testCode3',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sourceCode: code })
      });
    const data = await response.json();
    if (!response.ok) {
      throw Error(data.error);
    }
    console.log(data, "Test case result");

    return data;

  } catch (err) {
    console.log(err);
  }
};
//////////////////////////////////////////////////////////////////////////////////////
  
  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: 'https://judge0-ce.p.rapidapi.com/submissions' + "/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
        "X-RapidAPI-Key": '57a99261dcmshb4c8d406da1873bp1e28bbjsna091b6098ace',
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
        console.log("response.data", response.data);
        return;
      }
    } catch (err) {
      console.log("err", err);
      setProcessing(false);
      showErrorToast();
    }
  };

  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme.value)) {
      setTheme(theme);
    } else {
      defineTheme(theme.value).then((_) => setTheme(theme));
    }
  }
  useEffect(() => {
    defineTheme("oceanic-next").then((_) =>
      setTheme({ value: "oceanic-next", label: "Oceanic Next" })
    );
  }, []);

  const showSuccessToast = (msg) => {
    toast.success(msg || `Compiled Successfully!`, {
      position: "top-right",
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
      position: "top-right",
      autoClose: timer ? timer : 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
  
      {/* <div className="h-4 w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div> */}
      <br></br>
      <h1 className="font-bold px-10 py-1 rounded-md bg-gray-100" style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem' }}>
  Assignment: Product Inventory Management
</h1>
<p className="font-bold px-10 py-1 rounded-md bg-gray-100" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
  You have been tasked with implementing a product inventory management system. The system should allow adding, updating, and retrieving product information from the inventory.
</p>
<p className="font-bold px-10 py-1 rounded-md bg-gray-100" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
  Write a JavaScript program that implements the following functionality using functions:
</p>
<ol className="font-bold px-10 py-1 rounded-md bg-gray-100" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
  <li>
    Create a function <code>createProduct</code> that takes <code>id</code>, <code>name</code>, <code>price</code>, and <code>quantity</code> as parameters and returns an object representing a product.
  </li>
  <li>
    Create a function <code>addProduct</code> that takes the product object and adds it to the inventory array.
  </li>
  <li>
    Create a function <code>updateProduct</code> that takes the product object and updates the information of an existing product in the inventory.
  </li>
  <li>
    Create a function <code>getProductById</code> that takes an <code>id</code> and returns the product from the inventory based on its ID.
  </li>
  <li>
    Create a function <code>getAllProducts</code> that returns all products from the inventory.
  </li>
</ol>
<p className="font-bold px-10 py-1 rounded-md bg-gray-100" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
  Ensure that the appropriate validation is performed for each function. For example, when adding a product, validate that the product ID is unique, and when updating a product, validate that the product exists in the inventory.
</p>
      <br></br>
      <div className="flex flex-row">
        <div className="px-4 py-2">
          <LanguagesDropdown onSelectChange={onSelectChange} />
        </div>
        <div className="px-4 py-2">
          <ThemeDropdown handleThemeChange={handleThemeChange} theme={theme} />
        </div>
      </div>
      <div className="flex flex-row space-x-4 items-start px-4 py-4">
        <div className="flex flex-col w-full h-full justify-start items-end">
          <CodeEditorWindow
            code={code}
            onChange={onChange}
            language={language?.value}
            theme={theme.value}
          />
        </div>
  
        <div className="right-container flex flex-shrink-0 w-[30%] flex-col">
          <OutputWindow outputDetails={outputDetails}
          testCaseResult={testCaseResult} />
          <div className="flex flex-col items-end">
            <CustomInput
              customInput={customInput}
              setCustomInput={setCustomInput}
            />
            <button
              onClick={() => {
                handleSubmit();
                
                // handleSendSourceCode();
                // //  sendTocodalyze();
                // EslintCode();
             
              
  
              }}
              disabled={!code}
              className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}
            >
              {processing ? "Processing..." : "Compile and Execute"}
            </button>
            <div  className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}>
              <button onClick={handleESLINTClick}>Code Style Feedback</button>
            </div>
            <div  className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0",
                !code ? "opacity-50" : ""
              )}>
              <button onClick={handlePlatoClick}>Analysis Report</button>
            </div>
            <div  className={classnames(
                "mt-4 border-2 border-black z-10 rounded-md shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0"
              )}>
            <button
              onClick={homePage}
            >
              Home Page
            </button>
           
            </div>
          </div>
          </div>
          </div>
          <h4 style={{ fontWeight: "bold", marginLeft: "20px", marginTop: "1px" ,fontSize: "1.4rem" }}> Solution Feedback</h4>
          <div className="metrics-container  ml-6 flex flex-col space-y-3">
          {outputDetails && <OutputDetails outputDetails={outputDetails} data={data} />}
          </div>  
   
      {/* <Footer /> */}
    </>
  );
  };
export default Landing3;
