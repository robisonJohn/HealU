import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

// the goal of this component is to render our home page greeting within a Card

function Greeting() {
    return (
        <main id="greeting-container">
            <Button id="greeting-button">Welcome!</Button>
        </main>
    
        
    )
}

export default Greeting;