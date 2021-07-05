import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css';
import { Card } from 'react-bootstrap';

function About() {
    return (
        <main id="about-greeting">
            <Card className="greeting">
                <Card.Body>
                    <Card.Text>
                        The goal of Heal U is simple: to provide benchmarks and metrics to allow individuals
                        to track their mental health progression over time.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="greeting">
                <Card.Body>
                    <Card.Text>
                        Tracking these trends is crucial towards gaining an understanding of the aspects of our life
                        that bring us fulfillment and meaning on a daily basis.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="greeting" id="footer">
                <Card.Text>
                        Interested in trying Heal U out? Click Heal U above and begin exploring your options!
                    </Card.Text>
            </Card>
        </main>
        
    )
}

export default About;