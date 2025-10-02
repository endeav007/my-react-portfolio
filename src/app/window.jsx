'use client';
import React from 'react';
import { useState } from 'react';
import {projects} from './projects';
import './styles.css';


function Window(){
    return (
        <div className="project-wrapper" >
            
            <div > <Project arrayGroup={0}/> </div>
            <div > <Project arrayGroup={1}/> </div>
            
        </div>

    )
} 

function Project({arrayGroup}){
    const [pageNum, updatePageNum] = useState(1);
    function handleClick(index){
        updatePageNum(index);
    }
    
    return(
        <>   
        <div className="project-and-summary">
            <div className = "project-nav">
                <div className = "button-group">
                        <button className=" tab pixel-border" onClick={() => handleClick(1)}> 
                            Project
                        </button>
        
                        <button className="tab pixel-border" onClick={() => handleClick(2)}> 
                            Description
                        </button>

                        <button className="tab pixel-border" onClick={() => handleClick(3)}> 
                            Links + More Info
                        </button>
                        
                    </div>

                <div className = "project-box"> 
                    <div className = "window pixel-border"> 
                        <Pages pageNum ={pageNum} arrayGroup={arrayGroup}/>
                    </div> 
                </div>
               
            </div>
            
        </div>
            
        </> 
    )
}

function Pages({pageNum, arrayGroup}){

    if(pageNum == 2){
        return <InfoPage description={projects[arrayGroup].desc} technology1={projects[arrayGroup].tech} technology2={projects[arrayGroup].tech2}/>
    }else if(pageNum == 3){
        return <TechPage repoLink={projects[arrayGroup].repo} techUsed={projects[arrayGroup].techUsed} skills={projects[arrayGroup].skills}/>
    }
    else{
        return <IntroPage title={projects[arrayGroup].title} imageLink={projects[arrayGroup].imagelink} alt={projects[arrayGroup].imagealt}/>
    }

}

function IntroPage({title, imageLink, alt}){

    return(
       <>
        <div className = "IntroPage">
            <h1 className="page-title"> {title} </h1>
            <div className = "page-content">
                <img src={imageLink} alt={alt} />
            </div>
            
        </div>
       
       </>

    );
}

function InfoPage({header, description, technology1, technology2}){
    return(
       <>
        <div className = "InfoPage">
            <h2> Project Summary</h2>
            <p> {description} </p>
            <h2> Project Development </h2>
            <p> {technology1} </p>
            <p> {technology2} </p>
        </div>
       
       </>

    );
}

function TechPage({repoLink, techUsed, skills}){
    return(
       <>
        <div className = "TechPage ">
            <ul className="tech-list">

                <div className="tech-group">
                    <li className="tech-title"> Repo Link: </li>
                    <li> <a href={repoLink} target="_blank"> {repoLink} </a>  </li>
                </div>
                 <div className="tech-group">
                    <li className="tech-title"> Skills Developed: </li>
                    <li> {skills} </li>
                </div>   
            
                <div className="tech-group">
                    <li className="tech-title"> Technologies Used: </li>
                    <li> {techUsed} </li>
                </div>
               
            </ul>
        </div>
       
       </>

    );
}

export default Window;