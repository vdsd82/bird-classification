import React from 'react';

const ClassificationResult = ({ result, onShowDetails }) => {
  if (!result) return null;
  const commonName = result[0].label;
  const scientificName = result[1].label;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-primary mb-2">Predicted Bird: {commonName}</h2>
      <p className="text-primary mb-2">Scientific Name: {scientificName}</p>
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
