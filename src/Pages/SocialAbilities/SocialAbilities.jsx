import React from "react";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import Image from "../../assets/images/SS.jpeg";
import { Main } from "../../layouts/Main/Main";

export const SocialAbilities = () => {
  return (
    <Main>
      <CardInfo
        title="Habilidades Sociales"
        text={
          <div className="text-left space-y-4">
            <div><strong>Responsabilidad:</strong> Cumplo con mis compromisos y tareas de manera eficiente.</div>
            <div><strong>Recursividad:</strong> Encuentro soluciones creativas y eficientes ante los desafíos.</div>
            <div><strong>Comunicación efectiva:</strong> Expreso mis ideas con claridad y escucho activamente.</div>
            <div><strong>Trabajo en equipo:</strong> Me integro bien en grupos y contribuyo al logro de objetivos.</div>
            <div><strong>Adaptabilidad:</strong> Me ajusto rápidamente a nuevos entornos y metodologías de trabajo.</div>
            <div><strong>Proactividad:</strong> Tomo iniciativa y busco mejoras constantes en mi desempeño.</div>
          </div>
        }
        image={Image}
        imageWidth="w-72"  
        imageHeight="h-72"
      />
    </Main>
  );
};
