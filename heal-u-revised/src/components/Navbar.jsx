import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

function Navbar() {
    return (
        <nav>
            <Link to="/"><Button id="home-button">Heal U</Button></Link>
        </nav>
    )
}

export default Navbar;