import React, { useState } from 'react';
import Header from '../components/Header';
import UploadImage from '../components/UploadImage';
import ImagePreview from '../components/ImagePreview';
import LoadingIndicator from '../components/LoadingIndicator';
import ClassificationResult from '../components/ClassificationResult';
import Markdown from '../components/Markdown';
import Footer from '../components/Footer';
import { classifyImage } from '../utils/helpers';
import { fetchBirdDetails } from '../utils/helpers';

export default function Home() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [birdDetails, setBirdDetails] = useState(null);

  const handleUpload = async () => {
    if (!image) return;

    setLoading(true);
    setResult(await classifyImage(image));
    
    setLoading(false);
  };

  const handleShowDetails = async () => {
    if (result) {
      const birdName = result[0].label.toLowerCase().split(' ').join('-');
      const mdContent = await fetchBirdDetails(birdName);
      setBirdDetails(mdContent);
      setShowDetails(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {!image && (
          <UploadImage setImage={setImage} />
        )}
        {image && (
          <ImagePreview image={image} setImage={setImage} handleUpload={handleUpload} setResult={setResult} setBirdDetails= {setBirdDetails}/>        )}
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingIndicator />
            <span className="ml-4">Analyzing<span className="animate-dots">...</span></span>
          </div>
        ) : (
          <ClassificationResult result={result} onShowDetails={handleShowDetails} />
        )}
        {showDetails && <Markdown content={birdDetails} />}
      </main>
      <Footer />
    </div>
  );
}
