import React, { useRef, useCallback } from 'react';

const UploadImage = ({ setImage }) => {
  const fileInputRef = useRef();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    setImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 flex justify-center">
      <div
        className="w-96 h-96 border-4 border-dashed border-primary rounded-lg flex flex-col items-center justify-center cursor-pointer relative"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
        />
        <i className="fas fa-cloud-upload-alt text-3xl text-primary mb-2"></i>
        <p className="text-primary text-center">
          Drag and drop an image or click to upload
        </p>
      </div>
    </div>
  );
};

export default UploadImage;
