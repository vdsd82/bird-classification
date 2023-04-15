// components/Markdown.js
import React, { useEffect, useState } from 'react';
import { convertMarkdownToHtml } from '../utils/convertMarkdown';
import markdownStyles from './markdown-styles.module.css'

const Markdown = ({ content }) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const renderMarkdown = async () => {
      const htmlContent = await convertMarkdownToHtml(content);
      setHtml(htmlContent);
    };

    console.log(html)

    renderMarkdown();
  }, [content]);

  return (
    <div
      className="mx-auto p-4 my-8 text-primary">
      <div
        className={markdownStyles['markdown']}
       dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default Markdown;