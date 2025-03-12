import React from "react";
import { Main } from "../../layouts/Main/Main";
import { CardInfo } from "../../layouts/CardInfo/CardInfo";
import { EducationItem } from "../../components/educationItem/educationItem";

export const Studies = () => {
  return (
    <Main>
      <CardInfo
        title="Mis Estudios"
        text="Estos son los estudios y certificaciones que he completado hasta la fecha."
        image={null} 
      >
        <div className="w-full mt-4 space-y-4">
          <EducationItem 
            title="🎓 Bachiller Técnico" 
            institution="Marcelino Champagnat - 2023" 
          />

          <EducationItem 
            title="📜 Certificación en RPA" 
            institution="Pix Studio - RPA (Automatización de procesos robóticos)" 
          />

          <EducationItem 
            title="💻 Tecnólogo en Análisis y Desarrollo de Software" 
            institution="SENA - Centro de Comercio y Turismo (En curso)" 
          />
        </div>
      </CardInfo>
    </Main>
  );
};
