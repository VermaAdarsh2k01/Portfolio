import React from 'react';
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import project1 from '../ImageAssets/main.jpg'
import project2 from '../ImageAssets/second.jpg'

gsap.registerPlugin( useGSAP , ScrollTrigger )

function Projects()  {

  const container = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);
  const abtRef = useRef(null);
  const divRef = useRef(null)



  useGSAP( () => {
    const viewportwidth = window.innerWidth;

    const t1 = gsap.timeline({
      scrollTrigger:{
        trigger:container.current,
        start:'top 0%',
        end:'bottom -10%',
        pin:true,
        scrub:1,
        // markers:true
      }
    })

    if(viewportwidth <= 768){
    t1.from(textRef.current , {
        y:"50vh",
        scale:1,
        ease:'power1.out'
    }).from(linkRef.current , {
        y:"50vh",
        opacity:"0",
    })
    
    .from(abtRef.current , {
        y:"50vh",
        opacity:"0",
    })
  }else{
    t1.from(textRef.current , {
      y:"50vh",
      scale:5,
      ease:'power1.out'
  }).from(linkRef.current , {
      y:"50vh",
      opacity:"0",
  })
  
  .from(abtRef.current , {
      y:"50vh",
      opacity:"0",
  })
  }

  } , {scope:container , revertOnUpdate:true })




  return (
    <div ref={container}>
      <div className='h-[100vh] max-w-full bg-black flex flex-col justify-end py-5 relative max-sm:h-screen max-sm:w-full' >
        <div className='absolute top-5 left-1/2 -translate-x-1/2 scrollToHere'>
            <p className='text-container poppins-bold tracking-tighter text-gray-500 text-6xl max-w:text-2xl' ref={textRef}>
                PROJECTS
            </p>
        </div>
        <div className='proj-container max-w-full h-[100vh] flex items-center justify-center px-5 max-sm:flex-col max-sm:gap-10 max-sm:justify-center' ref={divRef}>
            <a href="https://shop-pages.netlify.app" target="_blank" rel="noopener noreferrer " className='max-w-1/2' ref={linkRef}>
                <img className='w-full rounded-3xl ' id='pro1img' src={project1}/>
            </a>
            <div className='abtProj flex flex-col max-w-1/2 text-white px-10 gap-5' ref={abtRef} >
                <h1 className='poppins-bold text-8xl text-[#C8A2C8] max-sm:text-[5vw]'>E-commerce section</h1>
                <p>Developed a key section of an e-commerce site with dual-filter functionality (gender and price range) for personalized product exploration. Implemented a cart feature for easy item addition, enhancing user experience and shopping efficiency</p>
            </div>
        </div>
      </div>
      
    </div>

  )
}

export default Projects
