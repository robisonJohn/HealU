import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Feeling(props) {
    const { emotionOne, magnitudeOne, reason, emotionTwo, magnitudeTwo, 
    emotionThree, magnitudeThree, sentiment } = props.feeling.fields;

    const deleteFeeling = async () => {
        // make our feeling url
        const feelingURL = `${baseURL}/${props.feeling.id}`;
        // make a delete request to our url
        await axios.delete(feelingURL, config);
        // trigger the useEffect
        props.setToggleFetch((curr) => !curr);

    }

    return (
        <article>
            <h3>{props.feeling.createdTime.slice(0, 10)}</h3>
            <p>How I generally feel: {sentiment}</p>
            <p>Key emotions that contribute to my feeling: </p>
            <p>{emotionOne} ({magnitudeOne})</p>
            <p>{emotionTwo} ({magnitudeTwo})</p>
            <p>{emotionThree} ({magnitudeThree})</p>
            <p>Why I feel this way: {reason}</p>
            <button onClick={deleteFeeling}>Delete Record</button>
            <Link to={`/edit/${props.feeling.id}`}>
                <button>Edit Feeling</button>
            </Link>
        </article>
    )
};

export default Feeling;