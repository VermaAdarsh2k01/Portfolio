import { useRef , useState} from 'react'
import './App.css'
import Hero from './components/Hero';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Contact from './components/Contact';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap'

gsap.registerPlugin(ScrollToPlugin);


function App() {


  const  handleScrolltoProject = () => {
    gsap.to(window , { duration:1, scrollTo: {y:'.scrollToHere'}})
  };

  const handleScrolltoContact = () => {
    gsap.to(window , { duration:2, scrollTo: {y:'.scrollToContact'}})
  }

  return (
      <div>
        <div className='w-full h-full max-[420px]:w-[100vw]'>
          <Hero handleScrolltoProject={handleScrolltoProject} handleScrolltoContact={handleScrolltoContact}/>
          <Project1 />
          <Project2/>
          <Project3/>
          <Contact />
        </div>
      </div>
  )
}

export default App
