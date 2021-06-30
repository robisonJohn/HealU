import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";

function Feeling(props) {
    const { emotion, magnitude, reason } = props.feeling.fields;

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
            <p>How I felt: {emotion}</p>
            <p>Strength of feeling: {magnitude}</p>
            <p>Why I felt this way: {reason}</p>
            <button onClick={deleteFeeling}>Delete Record</button>
            <Link to={`/edit/${props.feeling.id}`}>
                <button>Edit Feeling</button>
            </Link>
        </article>
    )
};

export default Feeling;