import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { ItemTitle } from "../../components/ItemTitle/ItemTitle";
import { ItemNavbar } from "../../components/ItemNavbar/ItemNavbar";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 flex w-full h-[5rem] bg-teal-600 items-center justify-between px-6 py-4 text-white shadow-md">

      <ItemTitle 
        content="Mi Portafolio 2025" 
        styles="text-3xl sm:text-2xl md:text-xl font-bold tracking-wide text-white text-center break-words"/>


        <button 
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú">
        ☰
      </button>

      <Navbar>
      <ul
  className={`flex items-center space-x-8 md:flex
    max-md:flex-col max-md:space-x-0 max-md:space-y-4
    max-md:absolute max-md:top-[4.27rem] max-md:left-0 max-md:bg-teal-600
    max-md:w-full max-md:py-4 max-md:shadow-lg max-md:transition-all max-md:duration-300
    ${isOpen ? "max-md:flex" : "max-md:hidden"}`}
    >



          <ItemNavbar route="/" content="Inicio"/>
          <ItemNavbar route="/HardSkills" content="Habilidades Técnicas" />
          <ItemNavbar route="/SocialAbilities" content="Habilidades Sociales" />
          <ItemNavbar route="/EnglishLevel" content="Nivel de inglés"/>
          <ItemNavbar route="/ProfesionalExperience" content="Experiencia Profesional" />
          <ItemNavbar route="/Studies" content="Estudios" />
        </ul>
      </Navbar>
    </header>
  );
};
