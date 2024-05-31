import React from 'react';

const ResultBox = ({ result }) => {
  return (
    <div>
      <h2></h2>
      <div>
        {/* Display the result data in a way that fits your application */}
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default ResultBox;
