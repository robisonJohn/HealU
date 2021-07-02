import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function NavOldFeeling() {
    return (
        <Link to = "/oldPosts"><Button id="button-2">How have you been doing?</Button></Link>
    )
}

export default NavOldFeeling;