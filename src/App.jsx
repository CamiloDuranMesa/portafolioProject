import React from "react";

import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./Pages/NotFound/NotFound";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";
import { SocialAbilities } from "./Pages/SocialAbilities/SocialAbilities";
import { EnglishLevel } from "./Pages/EnglishLevel/EnglishLevel";
import { HardSkills } from "./Pages/HardSkills/HardSkills";
import { ProfesionalExperience } from "./Pages/ProfesionalExperience/ProfesionalExperience";
import { Studies } from "./Pages/Studies/Studies";


export const App = () =>{

  return(
    <>
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/SocialAbilities" element={<SocialAbilities />} />
        <Route path="/EnlgishLevel" element={<EnglishLevel />} />
        <Route path="/HardSkills" element={<HardSkills/>} />
        <Route path="/ProfesionalExperience" element={<ProfesionalExperience />} />
        <Route path="/Studies" element={<Studies />} />
        
      </Routes>
      <Footer />
    </>
    
  )
}