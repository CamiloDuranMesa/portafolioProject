import React from "react";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import { Main } from "../../layouts/Main/Main";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaJava, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql, SiGithub, SiTailwindcss } from "react-icons/si";
import { SkillCategory } from "../../components/skillCategory/skillCategory";

export const HardSkills = () => {
  return (
    <Main>
      <CardInfo
        title="Habilidades Técnicas"
        text={
          <div className="text-left space-y-4">
            <SkillCategory
              title="Frontend"
              technologies={["React", "CSS", "Tailwind CSS"]}
              icons={[FaReact, FaCss3Alt, SiTailwindcss]}
            />

            <SkillCategory
              title="Backend"
              technologies={["Java", "JavaScript (Node.js)", "SQL (MySQL)", "MongoDB", "Express.js"]}
              icons={[FaJava, FaJs, FaNodeJs, SiExpress, FaDatabase, SiMysql, SiMongodb]}
            />

            <SkillCategory
              title="Control de Versiones"
              technologies={["Git", "GitHub"]}
              icons={[FaGitAlt, SiGithub]}
            />
          

            {/* Educación y Liderazgo */}
            <div>
              <strong>Educación y Liderazgo:</strong> Experiencia en desarrollo de software, mentoría y lógica de programación.
            </div>

            {/* Desarrollo Web */}
            <div>
              <strong>Desarrollo Web:</strong> Consumo de APIs, diseño y optimización de interfaces.
            </div>
          </div>
        }
      />
    </Main>
  );
};
