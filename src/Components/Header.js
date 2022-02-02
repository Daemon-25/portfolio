import React from 'react';
import Typed from 'react-typed';
import Particle from './Particle';

const Header = () => {
    return (
        <> 
            <div className="header-wraper">
                
            <Particle/>
                <div className="main-info">
                    <h1>Hi, I'm Lakshay!</h1>
                    <div>
                        <Typed
                            className='typed-text'
                            strings={['Student at NITKKR',
                                'Web Developer',
                                'Android App Developer',
                                'DIP Enthusiast']}
                            typeSpeed={40}
                            backSpeed={60}
                            loop >

                        </Typed>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
