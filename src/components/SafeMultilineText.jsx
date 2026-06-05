import React from "react";

const SafeMultilineText = ({ text, className = "" }) => {
  if (!text) return null;

  const lines = String(text).split("\n");

  return (
    <span className={className}>
      {lines.map((line, index) => (
        <React.Fragment key={`${line}-${index}`}>
          {index > 0 && <br />}
          {line}
        </React.Fragment>
      ))}
    </span>
  );
};

export default SafeMultilineText;
