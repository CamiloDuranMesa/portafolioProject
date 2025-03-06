import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { Itemtitle } from '../../components/Itemtitle/Itemtitle'
import Image from '../../assets/images/don.jpg';

export const SocialAbilities = () => {
  return (
        <Main >
    
          <Itemtitle content='Muy buenas a todos guapisimos' styles='text-blue-200 text-2xl pb-[2rem]  bg-blue-900 flex justify-center items-center'/>
          <img src={Image} alt="" className='w-[700px] rounded-sm' />
    
        </Main>
  )
}
