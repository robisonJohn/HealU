import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function NavNewFeeling() {
    return (
        <Link to = '/new'><Button id="button-1">How are you today?</Button></Link>
    )
}

export default NavNewFeeling;