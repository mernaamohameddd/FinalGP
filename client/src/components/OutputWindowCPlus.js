import React from 'react';

const OutputWindowCPlus = ({ outputDetails, testCaseResult }) => {
  return (
    <div className="output-window">
      <h3>Output</h3>
      {outputDetails && (
        <div className="output-details">
          <p>Status: {outputDetails.status.description}</p>
          <p>Time: {outputDetails.time} seconds</p>
          <p>Memory: {outputDetails.memory} KB</p>
        </div>
      )}
      <h3>Test Case Result</h3>
      {testCaseResult !== undefined && (
        <p>
          {testCaseResult ? (
            <span style={{ color: 'green' }}>Test Case Passed</span>
          ) : (
            <span style={{ color: 'red' }}>Test Case Failed</span>
          )}
        </p>
      )}
    </div>
  );
};

export default OutputWindowCPlus;
