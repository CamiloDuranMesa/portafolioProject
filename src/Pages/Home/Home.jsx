import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { CardInfo } from '../../layouts/CardInfo/CardInfo'
import Image from '../../assets/images/Miphoto.jpg'

export const Home = () => {
  return (
    <Main >
      <CardInfo
        title="Bienvenidos a mi portafolio, Soy Camilo Durán Mesa"
        text="Soy un programador dedicado con experiencia en Java, JavaScript, C#, SQL (MySQL) y MongoDB, especializado en desarrollo de software, gestión de bases de datos y microservicios. Tengo habilidades en arquitectura de sistemas, optimización de código y creación de soluciones eficientes. Me enfoco en escribir código limpio y estructurado, priorizando la claridad y el rendimiento."
        image={Image}
      />
    </Main>
  )
}
