import axios from "axios";
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
        <div className="total-feelings-container">
            <article className="feelings-container">
                <h3>{`${monthName} ${revisedDay}${ending} ${year}`}</h3>
                <p><strong>How I generally feel: </strong>{sentiment}</p>
                <p><strong>Key emotions that contribute to my feeling: </strong></p>
                <div className="feelings-object">
                    <p>{emotionOne} ({magnitudeOne})</p>
                    <p>{emotionTwo} ({magnitudeTwo})</p>
                    <p>{emotionThree} ({magnitudeThree})</p>
                </div>
                <p><strong>Why I feel this way: </strong>{reason}</p>
                <button id="delete" onClick={deleteFeeling}>Delete Record</button>
                <Link to={`/edit/${props.feeling.id}`}>
                    <button id="edit">Edit Feeling</button>
                </Link>
            </article>
        </div>
        
    )
};

export default Feeling;