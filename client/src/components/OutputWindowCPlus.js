import React from "react";

const OutputWindow2 = ({ outputDetails, testCaseResult, clangAnalysis }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {outputDetails ? atob(outputDetails?.compile_output) : null}
        </pre>
      );
    } else if (statusId === 3) {
      const decodedOutput = atob(outputDetails.stdout);
      return (
        <pre className={`px-2 py-1 font-normal text-xs ${testCaseResult === null ? 'text-yellow-500' : testCaseResult ? 'text-green-500' : 'text-red-500'}`}>
          {outputDetails ? (
            <>
              {testCaseResult === null ? "Pending..." : testCaseResult ? "Output: " + decodedOutput + " Correct Answer!" : "Incorrect output: " + decodedOutput}
              {clangAnalysis && (
                <div className="mt-2 p-2 bg-blue-100 border border-blue-500 rounded">
                  <p className="text-blue-800">{clangAnalysis}</p>
                </div>
              )}
            </>
          ) : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {outputDetails ? atob(outputDetails?.stderr) : null}
        </pre>
      );
    }
  };

  return (
    <>
      <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 mb-2">
        Output
      </h1>
      <div className="w-50 h-80 bg-[#1e293b] rounded-md text-white font-normal text-sm overflow-y-auto">
  {clangAnalysis ? (
    <pre style={{ margin: '0', height: '100%', whiteSpace: 'pre-wrap' }}>{clangAnalysis}</pre> // Display Clang error messages
  ) : (
    <p style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>No Clang analysis results to show yet.</p>
  )}
</div>

    </>
  );
};

export default OutputWindow2;
