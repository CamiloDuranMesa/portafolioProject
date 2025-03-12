import React from "react";

export const SkillCategory = ({ title, technologies, icons }) => {
  return (
    <div>
      <strong>{title}:</strong> {technologies.join(", ")}
      <div className="flex space-x-4 mt-2">
        {icons.map((Icon, index) => (
          <Icon key={index} className="text-2xl" />
        ))}
      </div>
    </div>
  );
};


