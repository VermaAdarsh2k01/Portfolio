import React from 'react';
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import third from '../ImageAssets/third.jpg'

gsap.registerPlugin( useGSAP , ScrollTrigger )

function Projects()  {

  const container = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);
  const abtRef = useRef(null);
  const divRef = useRef(null)



  useGSAP( () => {

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

    .from(linkRef.current , {
        y:"50vh",
        opacity:"0",
    })
    
    .from(abtRef.current , {
        y:"50vh",
        opacity:"0",
    })


  } , {scope:container , revertOnUpdate:true })




  return (
    <div ref={container}>
      <div className='h-[100vh] max-w-full bg-black flex flex-col justify-end py-5 relative' >
        <div className='proj-container max-w-full h-[100vh] flex items-center justify-center px-5 overfloy-x-hidden' ref={divRef}>
            <a href="https://guileless-croquembouche-2cb3f7.netlify.app" target="_blank" rel="noopener noreferrer " className='max-w-1/2' ref={linkRef}>
                <img className='w-full rounded-3xl' id='pro1img' src={third}/>
            </a>
            <div className='abtProj flex flex-col max-w-1/2 text-white px-10 gap-5' ref={abtRef} >
                <h1 className='poppins-bold text-8xl text-[#C8A2C8]'>MOQOO</h1>
                <p>The website is fully front-end animation-based. This website showcases a very good use of design and brand building using  a popular JS animation library GSAP</p>
            </div>
        </div>
      </div>
      
    </div>

  )
}

export default Projects
