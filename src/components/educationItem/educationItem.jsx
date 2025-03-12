import React from "react";

export const EducationItem = ({ title, institution }) => {
  return (
    <div>
      <h2 className="text-teal-700 text-lg font-semibold">{title}</h2>
      <p className="text-gray-800 text-sm">{institution}</p>
    </div>
  );
};
