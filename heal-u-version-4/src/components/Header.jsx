import React from 'react';
import Typed from 'react-typed';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Long-term mental health tracking</h1>
                <Typed 
                className="typed-text"
                strings={["Enter your feelings", "See past entries", "Visualize results", "Gain long-term understanding"]}
                typeSpeed={40}
                backSpeed={60}
                />
                <Link><Button className="btn-main">Tell us how you're feeling</Button></Link>
            </div>
            
        </div>
    )
}

export default Header