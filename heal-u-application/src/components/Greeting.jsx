import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

// the goal of this component is to render our home page greeting within a Card

function Greeting() {
    return (
    <Card>
        <Card.Body>
            <Card.Title>Hi, welcome to Heal U!</Card.Title>
            <Card.Text>
                The goal of Heal U is simple: to provide benchmarks and metrics to allow individuals
                to track their mental health progression over time.
            </Card.Text>
            <Card.Text>
                Tracking these trends are crucial towards gaining an understanding of the aspects of our life
                that bring us fulfillment and meaning on a daily basis.
            </Card.Text>
            <Card.Text>
                Interested in trying Heal U out? Click here to learn more!
            </Card.Text>
        </Card.Body>
    </Card>
        
    )
}

export default Greeting;