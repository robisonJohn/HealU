import React from 'react';
import Typed from 'react-typed';
import './Header.css';

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <Typed 
                className="typed-text"
                strings={["Enter your feelings", "See past entries", "Visualize results", 
                "Gain long-term understanding", "Become the best version of yourself"]}
                typeSpeed={100}
                backSpeed={100}
                />
                <Link to="/new"><Button className="btn-main">Tell us how you're feeling</Button></Link>
                
                
            </div>
            
        </div>
    )
}

export default Header