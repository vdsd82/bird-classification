import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Privacy Policy - AI Bird Classifier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow px-8 py-6">
        <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-md p-8 text-gray-800">
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="text-justify mb-4">
            At AI Bird Classifier, we are committed to protecting the privacy of our users. This Privacy Policy outlines the types of information we collect from users, how we use this information, and the measures we take to protect user privacy.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Information We Collect</h2>
          <p className="text-justify">
            We collect information from our users to improve the functionality of our platform and provide a better user experience. The types of information we collect include:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-justify mt-2">
              Personal Information: When users contact us or provide feedback, we may collect their name and email address.
            </li>
            <li className="text-justify mt-2">
              Usage Information: We collect information about user interactions with our platform, such as the features used, images uploaded, and the time spent on our platform.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">How We Use Your Information</h2>
          <p className="text-justify">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-justify mt-2">
              Improve our platform and its features.
            </li>
            <li className="text-justify mt-2">
              Respond to user inquiries and provide support.
            </li>
            <li className="text-justify mt-2">
              Analyze usage patterns to better understand how our platform is used and identify areas for improvement.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mt-6 mb-4">Protection of Your Information</h2>
          <p className="text-justify mb-4">
            We take appropriate security measures to protect the information we collect from unauthorized access, disclosure, or alteration. These measures include implementing industry-standard encryption and secure data storage practices.
          </p>
          <p className="text-justify">
            Despite our efforts to protect user information, no method of data transmission or storage can guarantee absolute security. Therefore, while we strive to protect user information, we cannot guarantee its absolute security.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-justify">
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We encourage users to periodically review this Privacy Policy to stay informed about our privacy practices.
          </p>
        </div>
        </main>
        <Footer />
    </div>
  )
  };
  export default PrivacyPolicy;
    