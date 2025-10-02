'use client';
import React from 'react';
import './styles.css';
import Header from './header';

function Home(){

    return(

        <div className="page" >
           
            <div className="home-page white-pixel-border">
                <Header/>
                <div className="container">
                    
                    <div className="intro">
                        <span id = "hello"> Hello, I'm </span> 
                        <div className = "name"> AUTUMN! </div>
                    </div>
                    
                    <span id = "summary"> VIDEO GAME DEVELOPER |  WEB DESIGNER | PROGRAMMER </span>
                    
                </div>

            </div>

            <div className="about">


                <div className = "label pixel-border right">
                    About Me
                </div>
                <div className="desc white-pixel-border">
                    <p> I have a passion for engaging, interactive design and love experimenting with fun concepts.
                        My programming journey began in 2020 during high school, where I used JavaScript and HTML 
                        to build browser-based games. Today, I focus on developing my ideas through game engines 
                        and JavaScript libraries. I believe mistakes are essential to learning and I enjoy diving 
                        headfirst into new concepts (usually with a dozen browser tabs open to help me along the way).
                    </p>

                </div>


            </div>


            <div className="about" id="skills">

                <div className="desc white-pixel-border">
                    <ul>
                        <li> React.js </li>
                        <li> Responsive Design </li>
                        <li> Browser Dev Tools </li>
                        <li> Git/GitHub </li>
                        <li> Unreal Engine/Unity</li>
                        <li> Photoshop</li>
                    </ul>

                </div>

                <div className = "label pixel-border left">
                    Skills
                </div>


            </div>

            <div className="about">


                <div className = "label pixel-border right">
                    Languages
                </div>
                <div className="desc white-pixel-border">
                    <ul>
                        <li> C++ </li>
                        <li> C </li>
                        <li> JavaScript </li>
                        <li> Java </li>
                        <li> C# </li>
                        <li> HTML/CSS </li>
                    </ul>

                </div>


            </div>

        </div>   

    )
       
}

export default Home;