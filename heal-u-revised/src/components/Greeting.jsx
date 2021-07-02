import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

// the goal of this component is to render our home page greeting within a Card

function Greeting() {
    return (
        <main id="greeting-container">

            <Card className="greeting">
                <Card.Body>
                    <Card.Title id="greeting-title">Hi, welcome to Heal U!</Card.Title>
                    <Card.Text>Click here to learn more!</Card.Text>
                </Card.Body>
            </Card>
        </main>
    
        
    )
}

export default Greeting;