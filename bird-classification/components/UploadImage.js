import React, { useRef, useCallback } from 'react';

const UploadImage = ({ image, setImage }) => {
  const fileInputRef = useRef();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDrop = useCallback((e) => {
    e.preventDefault();
    handleFileInputChange(e);
  }, []);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 flex justify-center">
      {!image && (
        <div
          className="w-96 h-96 border-4 border-dashed border-primary rounded-lg flex flex-col items-center justify-center cursor-pointer relative"
          onDrop={onDrop}
          onDragOver={onDragOver}
          onClick={() => fileInputRef.current.click()}
        >
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            className="hidden"
          />
          <i className="fas fa-cloud-upload-alt text-3xl text-primary mb-2"></i>
          <p className="text-primary text-center">
            Drag and drop an image or click to upload
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadImage;