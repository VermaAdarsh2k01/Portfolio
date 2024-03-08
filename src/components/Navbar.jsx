import React, { useState } from 'react'


function Navbar() {

  return (

    <div className='flex flex-col'>
    <div className='navbar w-full h-[10vh] flex justify-between fixed z-10  items-center px-10'>
        <p className='text-6xl text-[#C8A2C8] logo leading-3 pt-3 mix-blend-difference akira'>*</p>
        <div className='text-white flex items-center justify-around w-1/3' onClick={()=> handleNav()}>
            {navOpen ? "close" : "Menu"}
        </div>
    </div> 
    </div>
  )
}

export default Navbar
