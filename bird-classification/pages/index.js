import React, { useState } from 'react';
import Header from '../components/Header';
import UploadImage from '../components/UploadImage';
import ImagePreview from '../components/ImagePreview';
import LoadingIndicator from '../components/LoadingIndicator';
import ClassificationResult from '../components/ClassificationResult';
import Markdown from '../components/Markdown';
import Footer from '../components/Footer';

export default function Home() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    // Call the API to classify the image and get the result
    // setResult(await classifyImage(image));
    setLoading(false);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {!image && (
          <UploadImage image={image} setImage={setImage} />
        )}
        {image && (
          <ImagePreview image={image} setImage={setImage} handleUpload={handleUpload} />
        )}
        {loading ? <LoadingIndicator /> : <ClassificationResult result={result} onShowDetails={handleShowDetails} />}
        {showDetails && <Markdown content="Test" />}
      </main>
      <Footer />
    </div>
  );
}