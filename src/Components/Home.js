import React, { useRef } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import { Projects } from './Projects';
import { Footer } from './Footer';


export default function Home(){
    const about = useRef();
    const projects = useRef();

    const handleAbout = () => {
        window.scrollTo(0, about.current.offsetTop-150);
    }

    const handleProjects = () => {
        window.scrollTo(0, projects.current.offsetTop-115);
    }

    return(
        <>
            <Navbar handleAbout={handleAbout} handleProjects={handleProjects}/>
            <Header/>
            <About about={about}/>
            <Skills/>
            <Projects projects={projects}/>
            <Footer/>
        </>
    )

} 