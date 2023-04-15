import React from 'react';

const ImagePreview = ({ image, setImage, handleUpload, setResult, setBirdDetails }) => {
  if (!image) return null;

  const imageURL = URL.createObjectURL(image);

  const handleRemove = () => {
    setImage(null);
    setResult(null);
    setBirdDetails(null)
  };

  return (
    <div className="p-4 flex justify-center">
      <div className="w-96 h-auto relative">
        <img
          src={imageURL}
          alt="Uploaded bird"
          className="rounded-lg object-contain w-full h-auto"
        />
        {image && (
          <>
            <div className="absolute top-0 right-0 p-2">
              <button
                className="bg-secondary text-primary px-2 py-1 rounded-lg font-bold text-xs"
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-secondary text-primary px-4 py-2 rounded-lg font-bold"
                onClick={handleUpload}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
