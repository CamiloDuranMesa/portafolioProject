import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { Itemtitle } from '../../components/Itemtitle/Itemtitle'
import { ItemText } from '../../components/ItemText/ItemText'
import Image from '../../assets/images/don.jpg'

export const Home = () => {
  return (
    <Main>
      
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 rounded-xl shadow-lg mx-auto my-35 max-w-4xl w-full px-15 overflow-hidden">

        
        <Itemtitle 
          content='Bievenidos a mi portafolio, Soy Camilo Durán Mesa' 
          styles='text-blue-950 text-3xl font-semibold mb-4 text-center'
        />

        
        <ItemText 
          content='Soy un desarrollador de software apasionado por la tecnología, con experiencia en React y otras tecnologías modernas.'
          styles='text-gray-800 text-base sm:text-lg text-center mb-6 max-w-2xl'
        />

        
        <img 
          src={Image} 
          alt="Mi Foto"
          className='rounded-xl shadow-2xl w-56 h-56 object-cover mb-8 border-4 border-white'
        />
      </div>
    </Main>
  )
}
