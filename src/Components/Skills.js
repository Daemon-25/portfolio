import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faFileCode } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    return (
        <><div className="skill-wrapper" style={{ backgroundColor: "rgba(191, 191, 191, 1" }}>
            <div className="container" >
                <div className="skill">
                    <h3>My Skill Set</h3></div>
                    <div className="container cards row align-content-center justify-content-evenly align-items-center">
                    <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <div className="container my-2 ">
                                <div className="container icon-container col-auto">
                            <FontAwesomeIcon icon={faFileCode} className="icon img-fluid"/></div>
                            </div>
                            <h5 className="card-title">Programming Languages</h5>
                            <p className="card-text">
                                <ul type="circle">
                                    <li>C++</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                    <li>Kotlin</li>
                                    <li>Javascript</li>
                                </ul>
                            </p>    
                        </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">Others</h5>
                            <p className="card-text">
                                <ul type="circle">
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>Android Studio</li>
                                    <li>Image Processing</li>
                                    <li>Github</li>
                                    <li>MongoDB</li>
                                </ul>
                            </p>   
                        </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">What I want to master</h5>
                            <p className="card-text">
                                <ul type="circle">
                                    <li>Unity</li>
                                    <li>Unreal Engine</li>
                                    <li>Deep Learning</li>
                                </ul>
                                </p>    
                        </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Skills;
