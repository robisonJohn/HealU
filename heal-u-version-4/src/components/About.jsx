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

            <Card className="greeting">
                <Card.Body>
                    <Card.Text>
                    Heal U's methodology is largely based on two bodies of research:
                    </Card.Text>
                    <Card.Text>
                        <ul>
                            <li>The feelings wheel, developed by psychologist Robert Plutchik, suggests that people experience twelve core
                                emotions that come in pairs, i.e. sadness and joy. These pairs of emotions include the following:
                                <ul>
                                    <li>Peaceful - Angry</li>
                                    <li>Ashamed - Proud</li>
                                    <li>Sad - Joyful</li>
                                    <li>Surprised - Intrigued</li>
                                    <li>Afraid - Trusting</li>
                                    <li>Disgusted - Loving</li>
                                </ul>
                            </li>
                            <li>Maslow's Hierarchy of Needs, developed by psychologist Abraham Maslow, suggests that huamns have a hierarchy of 
                                needs which they seek to fulfill in order of importance. These needs are as follows:
                                <ul>
                                    <li>Basic Needs</li>
                                    <ul>
                                        <li>Physiological Needs - food, water, warmth, rest</li>
                                        <li>Safety - security, safety</li>
                                    </ul>
                                    <li>Psychological</li>
                                    <ul>
                                        <li>Love and Belonging - friends, intimate relationships</li>
                                        <li>Esteem - prestige, feeling of accomplishment</li>
                                    </ul>
                                    <li>Self-Fulfillment Needs</li>
                                    <ul>
                                        <li>Self-Actualization - achieving one's full potential</li>
                                    </ul>

                                </ul>
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="greeting">
                <Card.Text>
                        Therefore, the goal of Heal U is to bridge these ideas using principles of data science by employing visual tools
                        to determine whether or not we can find correlation between Maslow's principles and the feelings wheel. More specifically:
                        can we determine our daily emotions, to a degree of statistical accuracy, based only off of the relative fulfillment of our
                        Maslowian needs being satisifed?
                    </Card.Text>
            </Card>

            <Card className="greeting">
                <Card.Text>
                        Presently, the app works by entering your data into a form and then visualizing this data in the form of a histogram
                        that measures the relative fulfillment of each category. Eventually, it would be interesting to expand this project to 
                        include the following features:
                        <ul>
                            <li>K-means clustering of emotional pairs</li>
                            <li>Multiple regression analysis between Maslowian needs and emotions</li>
                            <li>Visualize emotional data over time</li>
                        </ul>
                        To do these projects, a much larger quantity of unbiased data is required. This is the next step for this application!
                    </Card.Text>
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