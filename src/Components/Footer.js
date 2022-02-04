import React from 'react';
import bitmoji from '../coffee.png'
import resume from '../Resume2.pdf'

export const Footer = () => {
  return (
    <>
        <div className="footer-wraper">
            <div className="container">
            <div className="row  align-content-center align-items-center justify-content-evenly foot">
                <div className="container col">
                    <img src={bitmoji} alt="bitmoji"/>
                </div>
                <div className="container col foot2">
                    <h3>I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</h3>
                    <div className="container row align-content-center align-items-center">
                    <a href="https://www.linkedin.com/in/lakshay-rose-514518206/" className='link col'> Linkedin </a>
                    <a href="https://github.com/Daemon-25" className='link col'> Github </a>
                    <a href="https://leetcode.com/lakshayrose0000/" className='link col'> Leetcode </a>
                    </div>
                </div>
                <div className="container col foot3">
                    <h4>Mail Me</h4>
                    <a href="mailto:lakshayrose0000@gmail.com" className="link">lakshayrose0000@gmail.com</a>
                    <br/><br />
                    <h4>Take a look at my resume</h4>
                    <a href={resume} className='link' target="_blank" rel='noreferrer'>Resume</a>
                </div>
            </div>
            </div>
        </div>
    </>
  );
};
