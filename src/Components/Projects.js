import React, { useState, useRef } from 'react';
import project from '../download.png'

export const Projects = (props) => {
    const myRef = useRef();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);

    const handleProject1 = (e) => {
        setTitle("Project 1");
        setDesc("lorem")
        setImage(project);

        e.preventDefault();
        myRef.current.click();
    }

    const handleProject2 = (e) => {
        setTitle("Project 2");
        setDesc("lorem")
        setImage(project);

        e.preventDefault();
        myRef.current.click();
    }

    const handleProject3 = (e) => {
        setTitle("Project 3");
        setDesc("lorem")
        setImage(project);

        e.preventDefault();
        myRef.current.click();
    }

    const handleProject4 = (e) => {
        setTitle("Project 4");
        setDesc("lorem")
        setImage(project);

        e.preventDefault();
        myRef.current.click();
    }

    return (
        <>
            {/**************BUTTON**************/}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" style={{visibility: "hidden"}} ref={myRef}>
                Launch demo modal
            </button>

            {/**************MODAL**************/}
            <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        </div>
                        <div className="modal-body">
                            <img src={image} alt="Project Image"/>
                        </div>
                        <div className="modal-footer">
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/**************CONTAINER**************/}
            <div className="container projects-wrapper" ref={props.projects}>
                <h2 className='my-2'>Some Projects by me</h2>
                <div className="container projects-card row align-content-center justify-content-evenly align-items-center">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project1" onClick={handleProject1}/>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project2" onClick={handleProject2}/>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project3" onClick={handleProject3}/>
                    </div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={project} className="card-img-top project-img" alt="Project4" onClick={handleProject4}/>
                    </div>
                </div>
            </div>
            
        </>
    );
};
