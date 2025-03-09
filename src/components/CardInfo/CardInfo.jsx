import React from "react";
import { Itemtitle } from "../../components/Itemtitle/Itemtitle";
import { ItemText } from "../../components/ItemText/ItemText";

export const CardInfo = ({ title, text, image,imageWidth = "w-56", imageHeight = "h-56" }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-xl shadow-lg mx-auto max-w-[70rem] w-full px-8 sm:px-16 my-24 min-h-[750px] md:min-h-[800px]">

      
      <Itemtitle
        content={title}
        styles="text-blue-950 text-2xl sm:text-3xl font-semibold mb-4 text-center"
      />

      <ItemText
        content={text}
        styles="text-gray-800 text-sm sm:text-lg text-center mb-6 max-w-2xl"
      />

        <img
        src={image}
        alt={title}
        className={`rounded-xl shadow-2xl ${imageWidth} ${imageHeight} object-cover mb-4 border-4 border-white`}
      />


    </div>
  );
};
