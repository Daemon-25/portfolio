import React from 'react';
import profile from '../Profile.JPG'

function About () {
  return (
      <>
      <div className="container about-wrapper my-5 ">
        <div className="container about-section row ">
            <div className="container profile col"><img src={profile} alt="my picture"className='profile-image'/></div>
            <div className="container about-info col">
                <h2>About me</h2>
                <h3>Lakshay Rose</h3>
                <h4>IT Undergrad 2020-2024</h4>
                <h4>NIT Kurukshetra</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis possimus veritatis adipisci. Excepturi ullam omnis cumque sequi in blanditiis quidem distinctio a praesentium? Culpa quas ullam dicta ducimus, facilis laudantium voluptatum impedit ipsum.</p>
            </div>
        </div>
        </div>
      </>
  );
};

export default About;
