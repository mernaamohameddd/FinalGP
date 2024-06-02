import React from "react";
//cppcheck
const OutputDetails2 = ({ outputDetails, data }) => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', width:'800px' }}>
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm">
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm">
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm">
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
          {outputDetails?.time}
        </span>
      </p>
      <p className="text-sm">
        Cyclomatic Complexity:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {data?.cppcheck?.complexity?.cyclomatic }
        </span>
      </p>
      <p className="text-sm">
        Maintainability:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {data?.cppcheck?.maintainability }
        </span>
      </p>
      <p className="text-sm">
       Difficulty:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {data?.cppcheck?.complexity?.methodAggregate?.halstead?.difficulty }
        </span>
      </p>
      <p className="text-sm">
       Effort:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {data?.cppcheck?.complexity?.methodAggregate?.halstead?.effort }
        </span>
      </p>
      <p className="text-sm">
       Length:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {data?.cppcheck?.complexity?.methodAggregate?.halstead?.length }
        </span>
      </p>
      <p className="text-sm">
       Cyclomatic Density:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {data?.cppcheck?.complexity?.methodAggregate?.cyclomaticDensity }
        </span>
      </p>
      <p className="text-sm">
        Halstead Bugs:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">
        {data?.cppcheck?.complexity?.methodAggregate?.halstead?.bugs }
        </span>
      </p>
      <p className="text-sm">
      Methods:
      <br/>
       {data?.cppcheck?.methods.map((method, index) => (
        <span key={index} className="text-sm">
         Method {index + 1}:
          <br />
          <span className="text-sm">
        Cyclomatic Complexity: <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.cyclomatic}</span>
        <br />
        Cyclomatic Density: <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.cyclomaticDensity}</span>
        <br/>
        Difficulty:<span className="font-semibold px-2 py-1 rounded-md bg-gray-100"> {method.halstead.difficulty}</span>
        <br/>
        Bugs:  <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.halstead.bugs}</span>
        <br/>
        Effort:  <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.halstead.effort}</span>
        <br/>
        Length:  <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.halstead.length}</span>
        <br />
        Lines of Code: <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.sloc.physical}</span>
        <br />
        Time: <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.halstead.time}</span>
        <br />
        Number of Parameters: <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.params}</span>
           </span>
      <br />
      <br />
        </span>
      ))}
      </p>

      <div className="text-sm">
      <div className="feedback-container">
      Feedback:{""}
      <br/>
      <span className="font-semibold px-2 py-1 rounded-md ">
       {data?.cppcheck?.complexity?.methodAggregate?.cyclomatic <= 5 ? 
      <>
       Cyclomatic Complexity is high. You should reduce it to improve its readability, maintainability, and testability.
        <br />
        To reduce the cyclomatic complexity, you should:
        <br />
        1. Extract reusable code
        <br />
        2. Seperate the program into separate functions or methods to reduce complexity by promoting code reuse and abstraction.
        <br />
        3. Simplify conditional statements
        <br />
        4. Break down large functions
        <br />
        5. Reduce nested loops
        <br />
        6. Eliminate code duplication
      </>
    : ""}
    
  </span>
  <br />
  <br />
  <br />
  <p className="text-sm">
      Methods Feedback:
      <br/>
      <br />
       {data?.cppcheck?.methods.map((method, index) => (
        <span key={index} className="text-sm">
         Method {index + 1}:
          <br />
          <span className="text-sm">
        Lines of Code: <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.sloc.physical}</span>
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.sloc.physical > 1 && (
      
             <p> Function {index+1} lines of code is {method.sloc.physical}! it is too long! you better divide it into two functions to reduce complexity</p>
             
           )}</span>
        Number of Parameters: <span className="font-semibold px-2 py-1 rounded-md bg-gray-100">{method.params}</span>
        <span className="font-semibold  px-2 py-1 rounded-md bg-gray-100">{method.params >= 4 && (
      
             <p> Function {index+1} number of parameters is {method.params}. It is better to have less number of parameters to avoid complexity. </p>
             
           )}</span>
           </span>
      <br />
      <br />
        </span>
      ))}
      </p>
  </div>
</div>
    </div>
    </div>
  );
};

export default OutputDetails2;
