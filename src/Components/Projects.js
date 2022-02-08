import React, { useState, useRef } from 'react';
import project1 from '../Project1.png'
import project2 from '../Project2.png'
import project3 from '../Project3.png'

export const Projects = (props) => {
    const myRef = useRef();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [link, setLink] = useState("");

    const handleProject1 = (e) => {
        setTitle("MERN Stack");
        setDesc("A MERN Stack project which allows user authorisation and signup and allows users to make new, edit or delete notes.")
        setImage(project1);
        setLink("https://github.com/Daemon-25/myNotebook");

        e.preventDefault();
        myRef.current.click();
    }

    const handleProject2 = (e) => {
        setTitle("Android Studio");
        setDesc("An Event booking app created using Android Studio Manager, where the users can book seaats for the events and pay on the site.");
        setImage(project2);
        setLink("https://github.com/Daemon-25/Android-Study-Jam-Project-1");

        e.preventDefault();
        myRef.current.click();
    }

    const handleProject3 = (e) => {
        setTitle("OpenCV");
        setDesc("Canvas Drawing project using Image Processing library OpenCV in Python in which you can use Pens to draw on a canvas during a live camera feed.")
        setImage(project3);
        setLink("https://github.com/Daemon-25/Canvas-Drawing");

        e.preventDefault();
        myRef.current.click();
    }

    return (
        <>
            {/**************BUTTON**************/}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" style={{ visibility: "hidden" }} ref={myRef}>
                Launch demo modal
            </button>

            {/**************MODAL**************/}
            <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header justify-content-center">
                            <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src={image} alt="Project Image" />
                        </div>
                        <div className="modal-footer justify-content-start">
                            <p>{desc}</p>
                            <p>Github:</p>
                            <a href={link}>{link}</a>
                        </div>
                    </div>
                </div>
            </div>

            {/**************CONTAINER**************/}
            <div className="container projects-wrapper" ref={props.projects}>
                <h2 className='my-2'>Some Projects by me</h2>
                <div className="container projects-card row align-content-center justify-content-evenly align-items-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={project1} className="card-img-top project-img" alt="Project1" onClick={handleProject1} />
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={project2} className="card-img-top project-img" alt="Project2" onClick={handleProject2} />
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={project3} className="card-img-top project-img" alt="Project3" onClick={handleProject3} />
                    </div>
                </div>
            </div>

        </>
    );
};
