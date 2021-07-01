import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col } from "react-bootstrap";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Feeling(props) {
    const { emotionOne, magnitudeOne, reason, emotionTwo, magnitudeTwo, 
    emotionThree, magnitudeThree, sentiment } = props.feeling.fields;

    const time = props.feeling.createdTime;

    const year = time.slice(0, 4);
    const month = time.slice(5,7);
    const day = time.slice(8,10);

    const monthsOfYear = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const index = parseInt(month) - 1;
    const monthName = monthsOfYear[index];

    const revisedDay = parseInt(day);

    let ending = '';

    if (revisedDay === 33 || revisedDay === 23 || revisedDay === 3) {
        ending = 'rd';
    } else {
        if (revisedDay === 32 || revisedDay === 22 || revisedDay === 2) {
            ending = 'nd';
        } else {
            if (revisedDay === 31 || revisedDay === 21 || revisedDay === 1) {
                ending = 'st';
            } else {
                ending = 'th';
            }
        }
    }

    const deleteFeeling = async () => {
        // make our feeling url
        const feelingURL = `${baseURL}/${props.feeling.id}`;
        // make a delete request to our url
        await axios.delete(feelingURL, config);
        // trigger the useEffect
        props.setToggleFetch((curr) => !curr);

    }

    return (

        <Card>
            <Card.Body>
                <Card.Title>{`${monthName} ${revisedDay}${ending} ${year}`}</Card.Title>
                <Card.Text><strong>How I generally feel: </strong> {sentiment}</Card.Text>
                <Card.Text><strong>Key emotions that contribute to my feeling: </strong></Card.Text>
                <Card.Text>1. {emotionOne} ({magnitudeOne})</Card.Text>
                <Card.Text>2. {emotionTwo} ({magnitudeTwo})</Card.Text>
                <Card.Text>3. {emotionThree} ({magnitudeThree})</Card.Text>
                <Card.Text><strong>Why I feel this way: </strong>{reason}</Card.Text>
            </Card.Body>
            <Row>
                <Col>
                    <Button onClick={deleteFeeling}>Delete Record</Button>
                </Col>
                <Col>
                    <Link to={`/edit/${props.feeling.id}`}>
                        <Button>Edit Feeling</Button>
                    </Link>
                    
                </Col>
            </Row>

        </Card>
        
    )
};

export default Feeling;