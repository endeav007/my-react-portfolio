'use client';
import React from 'react';
import './styles.css';

function Contact(){
    return(
        <>
        <ContactBar/>
        </>
    )

}


function ContactBar(){
    return(
        <>
            <div className="contact-group white-pixel-border">
                <a href="https://github.com/endeav007"> <img src="/github-mark.png" /> </a>
                <a href="mailto:autumnaustin046@gmail.com"> <img src="/emailicon.png" /> </a>
                <a href="https://www.linkedin.com/in/autumn-endeav-austin/"> <img src="/InBug-Black.png" /> </a>
            </div>
           
        </>
    )
}


export default Contact;