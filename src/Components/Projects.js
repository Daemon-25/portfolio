import React from 'react';
import project from '../download.png'

export const Projects = () => {
    return (
        <>
            <div className="container projects-wrapper">
                <h2 className='my-2'>Some Projects by me</h2>
                <div className="container projects-card row align-content-center justify-content-evenly align-items-center">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project1"/>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project2"/>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project3"/>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project4"/>
                    </div>
                </div>
            </div>
        </>
    );
};
