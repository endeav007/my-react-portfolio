import { StrictMode } from 'react'
import { createRoot } from 'react-dom'
import React from 'react';
import Home from './Home.jsx';
import Window from './window.jsx';
import Section from './section.jsx';
import Contact from './contact.jsx';

export default function(){
    return(
        
    <html>
        <body>
            <div>
                <Home />
                <Section title={"Projects"} idtxt={"projects"}/>
                <Window />
                <Section title={"Contact Me"} idtxt={"contact"}/>
                <Contact />
            </div>
        </body>
    </html>
        
    );
}