import React from "react";

export const ItemLink = ({ href, text, description }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-800 hover:underline font-semibold"
      >
        {text}
      </a>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};
