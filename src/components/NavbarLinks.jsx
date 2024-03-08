import React, { useRef } from 'react'
import { useEffect } from 'react';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


// gsap.registerPlugin( useGSAP );

function NavbarLinks({navOpen}) {

  const container= useRef()
            
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []); 


  useGSAP(
    ()=> {
      gsap.from( ".navdrop" ,{
        opacity:0,
        duration:0.2,
        delay:0.1,
        scrollTrigger:{
          trigger:'.page1'
        }
      }
      )
    } ,[navOpen]
  )
  

  return (
    <div className='w-full h-full fixed top-0 bg-black z-9 navdrop' ref={container} >
        <div className='w-full h-full flex items-center justify-center'>
            <div className=' w-[100vw] h-[60vh] absolute top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-around  text-white whitespace-nowrap'>
                <div className='flex gap-2 w-60 h-20 ' >
                  <p className='anitext W-[50%] flex items-start justify-end  font-light pr-2'>
                    01
                  </p>
                  <p className='anitext flex items-start text-6xl leading-none heading font-black hover:font-thin transition-all duration-100 ease-linear delay-300 tracking-tight' style={{fontStretch:'400%'}}>
                    PROJECTS
                  </p>
                </div>
                <div className='flex gap-2 w-60 h-20' >
                  <p className='anitext W-[50%] flex items-start justify-end  font-light pr-2'>
                    02
                  </p>
                  <p className='anitext W-1/2 flex items-start text-6xl leading-none heading font-black hover:font-thin transition-all duration-100 ease-linear delay-300 ' style={{fontStretch:'400%'}}>CONTACT</p>
                </div>
                <div className='flex gap-2 w-60 h-20' >
                  <p className='anitext W-[50%] flex items-start justify-end  font-light pr-2'>
                    03
                  </p>
                  <p className='anitext W-1/2 flex items-start text-6xl leading-none heading font-black hover:font-thin transition-all duration-100 ease-linear delay-300 ' style={{fontStretch:'400%'}}>SKILLS</p>
                </div>
            </div>
        </div>   
    </div>
  )

}
export default NavbarLinks
