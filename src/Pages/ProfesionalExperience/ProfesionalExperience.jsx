import React from "react";
import { Main } from "../../layouts/Main/Main";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import { ItemTitle } from "../../components/ItemTitle/ItemTitle";
import { ItemLink } from "../../components/ItemLink/ItemLink";

export const ProfesionalExperience = () => {
  return (
    <Main>
      <CardInfo
        title="Experiencia Profesional"
        text="Aún no tengo experiencia laboral formal, pero he desarrollado proyectos relevantes que destacan mis habilidades en desarrollo web y programación."
        image={null} // No se muestra imagen
      >
        <div className="w-full mt-4 space-y-6">
          <ItemTitle
            content="Proyectos Destacados"
            styles="text-gray-800 font-semibold text-lg"
          />

          <div className="space-y-4">
            <ItemLink
              href="https://github.com/CamiloDuranMesa/Taller-Bluesay.git"
              text="Bluesay Mockup - Diseño Responsive"
              description="Diseño de una interfaz responsiva utilizando HTML, CSS y JavaScript, optimizada para diferentes dispositivos."
            />

            <ItemLink
              href="https://github.com/CamiloDuranMesa/Diccionario-Traductor.git"
              text="Diccionario y Traductor"
              description="Aplicación que permite buscar definiciones y traducciones en múltiples idiomas con una interfaz intuitiva."
            />

            <ItemLink
              href="https://github.com/CamiloDuranMesa/Music-Player.git"
              text="Reproductor de Música"
              description="Un reproductor de música con funciones de control de audio, listas de reproducción y diseño atractivo."
            />
          </div>
        </div>
      </CardInfo>
    </Main>
  );
};
