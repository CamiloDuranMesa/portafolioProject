import React from 'react'

import { Navbar } from '../Navbar/Navbar'
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram, FaEbay  } from "react-icons/fa";
import { ItemNavbar } from '../../components/ItemNavbar/ItemNavbar'

export const Footer = () => {
  return (
    <footer className='flex w-[100vw] h-[7vh] bg-blue-950 justify-center items-center space-x-2'>
      <p>Desarrollado por  <strong>Camilo Durán Mesa</strong></p>
      <Navbar>
        <ul className=' flex align-center space-x-2'>
          <ItemNavbar content={<CiFacebook />}/>
          <ItemNavbar content={<CiTwitter />}/>
          <ItemNavbar content={<FaInstagram />}/>
          <ItemNavbar content={<FaEbay />}/>
        </ul>
      </Navbar>
    </footer>
  )
}
