import React, { useState , useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import project1 from '../ImageAssets/main.jpg'
import { IoIosArrowUp } from "react-icons/io";


// gsap.registerPlugin( useGSAP , ScrollTrigger)
gsap.registerPlugin(useGSAP);

function Page2() {
    

    const container = useRef();
    const pro1LinkRef = useRef();
    const leftRef = useRef();
    const centerRef = useRef();
    const rightRef = useRef();
 
    useGSAP( ()=>{
        
        const t1 = gsap.timeline({
            scrollTrigger:{
                trigger: container.current,
                start: "top 0%",
                end:"bottom -30%",
                // scrub:true,
                // markers:true,
                pin:true,
            } 
        });

        t1.to(leftRef.current ,{
            opacity:'1'
        })

        t1.to(rightRef.current ,{
            opacity:'1',
            delay:0.5
        })


        t1.from(centerRef.current, {
            scale:0,
            delay:0.5,
            ease:3
        })

        t1.from(pro1LinkRef.current ,{
            opacity:0,
            repeat:-1,
            duration:2,
            ease:1,
            delay:0.7
        })


    } , {scope:container})
    return (
        <>
            <div className='w-full h-screen bg-black flex-col items-center justify-center px-5 ' ref={container}>
                <div className='flex items-center justify-center w-full h-[90%]'>    
                    <div ref={leftRef} className='left w-1/4 bg-blck text-white text-left text-[3vw] leading-none heading font-[400] flex flex-col items-end opacity-0' style={{fontStretch:"700%"}}>
                        <p>LET'S SEE</p>
                        <p>ONE</p>
                        <p>PROJECT</p>
                    </div>
                    <div ref={centerRef} className='center w-1/2 '>
                    <a href="https://shop-pages.netlify.app" target="_blank" rel="noopener noreferrer"><img className='w-full' id='pro1img' src={project1}></img></a>
                    </div>
                    <div ref={rightRef} className='right w-1/4 bg-blck text-white text-left text-[3vw] leading-none heading font-[400] flex flex-col items-start whitespace-nowrap opacity-0' style={{fontStretch:"700%"}}>
                        <p>USING REACT</p>
                        <p>AND</p>
                        <p>TAILWIND CSS</p>
                    </div>
                </div>
                <div ref={pro1LinkRef} className='text-zinc-300 heading font-heavy w-full flex flex-col items-center justify-center mt-5' id="projLink" style={{fontStretch:"600%"}}>
                    <IoIosArrowUp size="20px" />
                    Click 
                </div>
            </div>
        </>
    )
}

export default Page2
