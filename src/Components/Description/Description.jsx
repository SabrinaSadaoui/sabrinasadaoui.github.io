import React from 'react';

const Description = ({ text, boldWords }) => {
  const createHighlightedText = () => {
    let remainingText = text;
    const elements = [];

    boldWords.forEach((string, index) => {
      const regex = new RegExp(string, 'gi');
      const parts = remainingText.split(regex);

      if (parts.length > 1) {
        elements.push(parts[0]);
        elements.push(<span key={index} className="keyword">{string}</span>);
        remainingText = parts.slice(1).join('');
      }
    });

    if (remainingText) {
      elements.push(remainingText);
    }

    return elements;
  };

  return <h3>{createHighlightedText()}</h3>;
};

export default Description;
