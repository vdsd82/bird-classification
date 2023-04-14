import React from 'react';

const ClassificationResult = ({ result, onShowDetails }) => {
  if (!result) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-2">{result.name}</h2>
      <p className="text-primary mb-4">Confidence: {(result.confidence * 100).toFixed(2)}%</p>
      <button
        className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold"
        onClick={onShowDetails}
      >
        Show Details
      </button>
    </div>
  );
};

export default ClassificationResult;