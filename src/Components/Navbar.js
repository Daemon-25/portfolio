import React from 'react';
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import resume from '../Resume2.pdf'

export const Navbar = (props) => {
    const { handleAbout, handleProjects } = props;

    return (
        <>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark`} >
                <div className="container" data-spy="affix" data-offset-top="0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo..." className='logo' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars} style={{color : "white"}}/>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={handleAbout}>About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={handleProjects}>Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href={resume} target="_blank" rel='noreferrer'>Resume</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );

} 

export default Navbar;