import React from 'react'

import Image from  '../../assets/images/error-404.png'

export const NotFound = () => {
  return (
    <div>
        <img src={Image} alt="Not found resources" className='w-[99vw] h-[99vh]'/>
    </div>
  )
}
