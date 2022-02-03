import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';


export default function Home(){
    return(
        <>
            <Navbar/>
            <Header/>
            <About/>
            <Skills/>
        </>
    )

} 