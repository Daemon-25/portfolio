import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faStar } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function Skills() {

    return (
        <><div className="skill-wrapper" style={{ backgroundColor: "rgba(191, 191, 191, 1" }}>
            <div className="container" >
                <div className="skill">
                    <h3>My Skill Set</h3>
                </div>
                <div className="container cards row align-content-center justify-content-evenly align-items-center">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <div className="container my-2 ">
                                <div className="container icon-container col-auto">
                                    <FontAwesomeIcon icon={faFileCode} className="icon img-fluid" />
                                </div>
                            </div>
                            <h5 className="card-title">Programming Languages</h5>

                            <ul style={{ listStyleType: "disc" }} className="card-text">
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>Kotlin</li>
                                <li>Javascript</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <div className="container my-2 ">
                                <div className="container icon-container col-auto">
                                    <FontAwesomeIcon icon={faLaptop} className="icon img-fluid" />
                                </div>
                            </div>
                            <h5 className="card-title">Others</h5>

                            <ul className="card-text" style={{ listStyleType: "disc" }}>
                                <li>ReactJS</li>
                                <li>NodeJS</li>
                                <li>Android Studio</li>
                                <li>Image Processing</li>
                                <li>Github</li>
                                <li>MongoDB</li>
                            </ul>

                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <div className="container my-2 ">
                                <div className="container icon-container col-auto">
                                    <FontAwesomeIcon icon={faStar} className="icon img-fluid" />
                                </div>
                            </div>
                            <h5 className="card-title">What I want to master</h5>

                            <ul style={{ listStyleType: "disc" }} className="card-text">
                                <li>Unity</li>
                                <li>Unreal Engine</li>
                                <li>Deep Learning</li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};