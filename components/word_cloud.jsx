"use client";
import React, { useEffect, useRef } from 'react';

import Words from '../public/assets/word_bank/word';

const WordCloud = () => {  // Ensure words are passed as a prop
  const tagCloudRef = useRef(null);

  useEffect(() => {
    const loadTagCloud = async () => {
      const TagCloud = await import('TagCloud');

      const container = tagCloudRef.current;
      const texts = Words(); // Ensure that 'words' is an array of strings
      
      const options = {};

      // Use the TagCloud library here
      
      const tagCloudInstance = new TagCloud.default(container, texts, options);
      
    };

    loadTagCloud();
    

    return () => {
      // Cleanup logic if needed
      
    };
  }, []); // Add 'words' to dependency array

  return (
    <div className="tagcloud-container">
      
      <div ref={tagCloudRef} className="tagcloud" />
    </div>
  );
};

export default WordCloud;