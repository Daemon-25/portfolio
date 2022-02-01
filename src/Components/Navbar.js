import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from "../logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
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
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Resume</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

} 