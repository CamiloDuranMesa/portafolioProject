import React from "react";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import Image from "../../assets/images/R.png"

export const HardSkills = () => {
  return (
    <CardInfo
      title="Habilidades Técnicas"
      text={
        <div className="text-left space-y-4">
          <div>
            <strong>Frontend:</strong> React, HTML, CSS, JavaScript, Tailwind CSS.
          </div>
          <div>
            <strong>Control de Versiones:</strong> Git, GitHub.
          </div>
          <div>
            <strong>Educación y Liderazgo:</strong> Experiencia en mentoría, lógica de programación, 
            preparación y conducción de conferencias.
          </div>
          <div>
            <strong>Desarrollo Web:</strong> Creación de aplicaciones del lado del cliente, 
            consumo de APIs, diseño y optimización de interfaces.
          </div>
        </div>
      }
      image={Image}
      imageWidth="w-72"  
      imageHeight="h-50"
    />
  );
};
