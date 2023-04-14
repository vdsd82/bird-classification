import React from 'react';
import ReactMarkdown from 'react-markdown';

const Markdown = ({ content }) => {
  return (
    <div className="p-4 text-primary">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Markdown;