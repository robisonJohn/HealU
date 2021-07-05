import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// REACT ROUTER-DOM
import { Link } from 'react-router-dom';


/* 
the core of this navbar comes from the official bootstrap documentation, found below:
https://getbootstrap.com/docs/4.0/components/navbar/
*/
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand">Heal U</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">How are you feeling?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">How have you been?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Visualize feelings</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">About Heal U</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
