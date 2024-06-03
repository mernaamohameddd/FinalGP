import React from "react";

const OutputDetails2 = ({ outputDetails, testCaseResult }) => {
  console.log("outputDetails:", outputDetails);
  console.log("testCaseResult:", testCaseResult);

  return (
    <div style={{ marginTop:'8px', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width: '1455px' }}>
      <div className="metrics-container mt-4 flex flex-col space-y-3">
       
        <p style={{ fontSize: '16px', marginTop:'-14px'}}>
          Code Logic:{" "}
          <span className={`font-semibold px-2 py-1 rounded-md ${testCaseResult === null ? 'bg-yellow-100 text-yellow-800' : testCaseResult ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {testCaseResult === null ? "Pending" : testCaseResult ? "Passed" : "Failed"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OutputDetails2;
