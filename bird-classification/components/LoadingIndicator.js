import React from 'react';

const LoadingIndicator = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="animate-spin rounded-full h-10 w-10 border-t-2border-b-2 border-primary">
      </div>
    </div>
  );
};

export default LoadingIndicator;