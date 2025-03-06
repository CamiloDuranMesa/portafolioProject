import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Itemtitle } from '../../components/Itemtitle/Itemtitle'
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'


export const Header = () => {
  return (
<header className='flex w-full h-[5rem] bg-blue-950 items-center justify-between px-6 py-4 text-white shadow-md'>
  {/* Título del Portafolio */}
  <Itemtitle 
    content="Mi Portafolio 2025" 
    styles="text-3xl font-bold tracking-wide text-white"
  />

  {/* Barra de navegación */}
  <Navbar>
    <ul className="flex items-center space-x-8 max-md:flex-wrap">
      <ItemNavbar route="/" content="Home"/>
      <ItemNavbar route="/HardSkills" content="Habilidades Técnicas" />
      <ItemNavbar route="/SocialAbilities" content="Habilidades Sociales" />
      <ItemNavbar route="/EnglishLevel" content="Nivel de inglés"/>
      <ItemNavbar route="/ProfesionalExperience" content="Experiencia Profesional" />
      <ItemNavbar route="/Studies" content="Estudios" />
    </ul>
  </Navbar>
</header>

  )
}
