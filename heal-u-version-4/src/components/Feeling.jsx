import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";
import './Feeling.css';
import { Table } from 'react-bootstrap';

function Feeling(props) {
    const { love, peace, pride, joy, intrigue, trust, comfort, safety, relationships, confidence,
    actualization, reason } = props.feeling.fields;

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
/*
    let emotionType = '';

    if (parseInt(emotion) === 1) {
        emotionType = 'Joy';
    } else if (parseInt(emotion) === 2) {
        emotionType = 'Love';
    } else if (parseInt(emotion) === 3) {
        emotionType = 'Surprise';
    } else if (parseInt(emotion) === 4) {
        emotionType = 'Sadness';
    } else if (parseInt(emotion) === 5) {
        emotionType = 'Anger';
    } else if (parseInt(emotion) === 6) {
        emotionType = 'Fear';
    }
*/


    return (
            <tbody>
                <tr>
                <td>{love}</td>
                <td>{peace}</td>
                <td>{pride}</td>
                <td>{joy}</td>
                <td>{intrigue}</td>
                <td>{trust}</td>
                <td>{comfort}</td>
                <td>{safety}</td>
                <td>{relationships}</td>
                <td>{confidence}</td>
                <td>{actualization}</td>
                <td>{reason}</td>
                </tr>
            </tbody>

    )
};

export default Feeling;