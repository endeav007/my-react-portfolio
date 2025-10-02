'use client';
import React from 'react';
import './styles.css';


function Section({title, idtxt}){
    return(
        <>
            <div className="section white-pixel-border" id={idtxt}>
                <h1> {title} </h1>
            </div>
        </>
    )
}

export default Section;