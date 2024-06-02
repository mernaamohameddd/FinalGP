const COutputWindow = ({ outputDetails, testCaseResult, clangLineNumbers }) => (
    <div>
      {clangLineNumbers ? (
        <div>
          <strong>Clang Error Lines:</strong> {clangLineNumbers}
        </div>
      ) : (
        <p>No error line numbers found.</p>
      )}
    </div>
  );
  
  export default COutputWindow;
  