import React from 'react'
import gsap from 'gsap';
import { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../App.css'

gsap.registerPlugin( useGSAP , ScrollTrigger);


function Hero({handleScrolltoProject , handleScrolltoContact}) {

  const container = useRef();
  const textRef = useRef(null);
  const textContainerRef = useRef(null);
  const upperTextRef = useRef(null);
 
  useGSAP( ()=> {
    const viewportwidth = window.innerWidth;

    gsap.to( textRef.current , {
      opacity:1,
      delay:2.3
    })

    if(viewportwidth <= 768){
    gsap.to( textRef.current , {
      transform: "translateX(-48%)",
      color:"#C8A2C8",
      fontWeight:"200",
      scrollTrigger:{
        trigger:".page1",
        start:"top -10%",
        end:"bottom 60%",
        pin:true,
        scrub:1,
        markers:true
      }
    })  
    }else(
    gsap.to( textRef.current , {
      transform: "translateX(-44%)",
      color:"#C8A2C8",
      fontWeight:"200",
      scrollTrigger:{
        trigger:".page1",
        start:"top 0%",
        end:"bottom -200%",
        pin:true,
        scrub:1,
        markers:true
      }
    })
    ) 
    }, {scope: container})

  return (
    <div className='max-sm:h-screen max-sm:w-full ' ref={container}>
      <div className='page1 max-w-screen h-screen max-sm:h-screen max-sm:w-screen' >
      <div className='navbar w-full h-[10vh] flex justify-between items-center bg-black px-10 max-sm:px-2 max-sm:justify-center max-sm:gap-40'>
        <p className='logo text-6xl text-[#C8A2C8]  leading-3 pt-3 mix-blend-difference akira'>*</p>
        <div className='text-[#C8A2C8] flex items-center justify-around w-1/3 max-sm:gap-10'>
            <p 
              className='w-1/3 cursor-pointer heading flex justify-center text-md leading-none font-bold tracking-wide hover:font-thin transition-all duration-100 ease-linear delay-300 max-sm:text-sm' style={{fontStretch:'500%'}}
              onClick={handleScrolltoProject}>
              PROJECTS
            </p>
            <p 
              className='w-1/3 cursor-pointer heading flex justify-center text-md leading-none font-bold tracking-wide hover:font-thin transition-all duration-100 ease-linear delay-300 max-sm:text-sm' style={{fontStretch:'500%'}}
              onClick={handleScrolltoContact}>
              CONTACT
            </p>
        </div>
      </div> 
      <div className='w-full h-[90vh] flex flex-col items-center justify-center bg-black page1 max-sm:h-[90vh]'>
        <div>
          <p className=' cursor-pointer text-white heading font-bold transition-all ease-in-out delay-150 hover:font-black hover:scale-125 duration-300 text-xl relative w-[max-content] before:absolute before:inset-0 before:bg-black hover:text-[#C8A2C8] before:animate-typewriter' style={{fontStretch:"500%"}} ref={upperTextRef}>
            Hi there! , I am Adarsh Verma and I am a 
          </p>
        </div>
        <div className='w-full flex items-center justify-start overflow-hidden' ref={textContainerRef}>
          <p className='text-[30vw] whitespace-nowrap txt font-black text-white leading-none heading opacity-0' ref={textRef} style={{fontStretch:'500%'}}>FRONT END DEV</p>
        </div> 
      </div>
  </div>
  </div>
  )
}

export default Hero


