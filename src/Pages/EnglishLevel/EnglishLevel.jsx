import React, { useEffect, useState } from "react";
import { Main } from "../../layouts/Main/Main";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import { motion } from "framer-motion";

export const EnglishLevel = () => {
  const skills = { listening: 75, speaking: 65, reading: 80, writing: 70 };
  const [progress, setProgress] = useState({ listening: 0, speaking: 0, reading: 0, writing: 0 });

  useEffect(() => {
    setTimeout(() => setProgress(skills), 500);
  }, []);

  return (
    <Main>
      <CardInfo 
        title="My English Level: B1 (Intermediate)" 
        text="Here is an overview of my English skills at the B1 level."
        image={null} // Evita que se muestre la imagen
      >
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          {Object.entries(progress).map(([skill, value]) => (
            <motion.div 
              key={skill} 
              className="flex flex-col items-center bg-white shadow-md rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-gray-800 font-semibold capitalize">{skill}</p>
              <motion.span 
                className="text-2xl font-bold text-teal-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                {value}%
              </motion.span>
            </motion.div>
          ))}
        </div>
      </CardInfo>
    </Main>
  );
};
