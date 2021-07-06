import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Long-term mental health tracking</h1>
                <Typed 
                className="typed-text"
                strings={["Enter your feelings", "See past entries", "Visualize results"]}
                typeSpeed={40}
                backSpeed={60}
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
            
        </div>
    )
}

export default Header
