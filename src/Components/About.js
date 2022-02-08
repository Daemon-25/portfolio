import React from 'react';
import profile from '../profile.jpg'

function About (props) {
  const { about } = props;
  return (
      <>
      <div className="container about-wrapper my-5 " ref={about}>
        <div className="container about-section row ">
            <div className="container profile col"><img src={profile} alt="my picture"className='profile-image'/></div>
            <div className="container about-info col">
                <h2>About me</h2>
                <h3>Lakshay Rose</h3>
                <h4>IT Undergrad 2020-2024</h4>
                <h4>NIT Kurukshetra</h4>
                <p>I am very passionate about development and has various skills of professional efficiency. Alongwith writing clean code I love to include my work with competent design. Some of my other interests include doing dumb shit, photography and gaming.</p>
            </div>
        </div>
        </div>
      </>
  );
};

export default About;
