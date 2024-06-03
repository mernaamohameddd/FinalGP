import React from 'react';

const OutputWindow2 = ({ outputDetails, testCaseResult, clangAnalysis }) => {
  
  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-50 h-80 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto flex justify-center items-center">
        {clangAnalysis ? (
          <pre style={{ margin: '0', height: '100%', whiteSpace: 'pre-wrap' }}>{clangAnalysis}</pre>
        ) : (
          <div style={{ margin: '0' }}>
          </div>
        )}
      </div>
    </>
  );
};

export default OutputWindow2;
