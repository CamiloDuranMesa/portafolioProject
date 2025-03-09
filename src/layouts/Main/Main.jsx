import React from "react";

export const Main = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen"> 
      <div className="flex-grow">{children}</div> 
    </main>
  );
};
