import React, { useRef } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import swal from 'sweetalert';

gsap.registerPlugin( useGSAP , ScrollTrigger)

function Contact() {
    const copyText = "verma.adarsh2510@gmail.com"
    
    const handleCopy = async function(){
        try{
            await navigator.clipboard.writeText(copyText);
            swal("Text copied to clipBoard");
        }catch(err){
            console.log("error")
        }
    }

    const containerRef = useRef(null);
    const textRef = useRef(null)

    useGSAP( ()=> {
        const t1 = gsap.timeline({
            scrollTrigger:{
              trigger:containerRef.current,
              start:'top 0%',
              end:'bottom -10%',
              pin:true,
              scrub:1,
              markers:true
            }
          })

        t1.from(textRef.current , {
            y:"50vh",
            scale:5.2,
            ease:'power1.out'
        })
        .from(".icons" , {
            opacity:0,
            stagger:1
        })
        // .from("Linktext" ,{
        //     opacity:0,
        //     y:10,
        //     stagger:1
        // })
    })

    


  return (
    <div ref={containerRef}>
        <div className='w-full h-[100vh] bg-black'>
            <div className='div-cont w-full h-full flex flex-col items-center justify-center relative scrollToContact'>
                <p className='absolute top-10 poppins-bold tracking-tighter text-gray-500 text-6xl' ref={textRef}>Contact</p>
                <div className='links flex justify-around w-full' >
                    <a className='flex flex-col justify-center items-center gap-8 icons' target='_blank' href='https://www.linkedin.com/in/adarsh-verma-2k01/'>
                        <FaLinkedin size={200} color='#c8a2c8' />
                        <p   className='text-4xl poppins-bold Linktext text-white'>See LinkedIn</p>
                    </a>
                    <a className='flex flex-col justify-center items-center gap-8 icons' target='-blank' href='https://www.linkedin.com/in/adarsh-verma-2k01/'>
                        <FaGithub size={200} color='#c8a2c8'  />
                        <p  className='text-4xl poppins-bold Linktext text-white'>See GitHub</p>
                    </a>
                    <div className='flex flex-col justify-center items-center gap-8 icons' onClick={handleCopy} >
                        <IoIosMail size={220} color='#c8a2c8'  />
                        <p  className='text-4xl poppins-bold Linktext text-white'>Send Mail</p>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
