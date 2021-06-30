import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function EditFeeling(props) {
    const [sentiment, setSentiment] = useState("");
    const [emotionOne, setEmotionOne] = useState("");
    const [emotionTwo, setEmotionTwo] = useState("");
    const [emotionThree, setEmotionThree] = useState("");
    const [magnitudeOne, setMagnitudeOne] = useState(0);
    const [magnitudeTwo, setMagnitudeTwo] = useState(0);
    const [magnitudeThree, setMagnitudeThree] = useState(0);
    const [reason, setReason] = useState("");
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        // if there is an id AND feelings is longer than 0
        if (params.id && props.feelings.length > 0) {
            // find the feeling where its id matches the id from params and save it in a variable called feelingToEdit
            const feelingToEdit = props.feelings.find((feeling) => feeling.id === params.id);
            // if this feeling exists
            if (feelingToEdit) {
                setSentiment(feelingToEdit.fields.sentiment);
                setEmotionOne(feelingToEdit.fields.emotionOne);
                setEmotionTwo(feelingToEdit.fields.emotionTwo);
                setEmotionThree(feelingToEdit.fields.emotionThree);
                setMagnitudeOne(feelingToEdit.fields.magnitudeOne);
                setMagnitudeTwo(feelingToEdit.fields.magnitudeTwo);
                setMagnitudeThree(feelingToEdit.fields.magnitudeThree);
                setReason(feelingToEdit.fields.reason);
            }
        }
    }, [params.id, props.feelings])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // collect all stateful information in a new feelings object
        const newFeeling = {
            emotionOne, 
            magnitudeOne,
            reason,
            emotionTwo,
            magnitudeTwo,
            emotionThree,
            magnitudeThree,
            sentiment,
        }

        if (params.id) {
            const feelingsURL = `${baseURL}/${params.id}`;
            await axios.put(feelingsURL, { fields: newFeeling }, config);
        } else {
            // make an axios post request to the baseURL with the data (???) and our config
            // note: we need to wrap newFeeling within a fields object
            await axios.post(baseURL, { fields: newFeeling }, config);
        }

        // trigger our useEffect
        props.setToggleFetch((curr) => !curr);
        // send the user home when they are done
        setTimeout(() => {
            history.push("/");
        }, 1000);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="sentiment">How are you feeling generally?</label>
            <input 
            type="text"
            id="sentiment"
            value={sentiment}
            onChange={(e) => setSentiment(e.target.value)}
            required
            />
            <label htmlFor="emotionOne">What is the one major feeling you are experiencing today?</label>
            <input 
            type="text"
            id="emotionOne"
            value={emotionOne}
            onChange={(e) => setEmotionOne(e.target.value)}
            required
            />
            <label htmlFor="magnitudeOne">On a scale from 1-10, how strongly are you feeling this way?</label>
            <input 
            type="range"
            id="magnitudeOne"
            min = {1}
            max = {10}
            value={magnitudeOne}
            onChange={(e) => setMagnitudeOne(e.target.valueAsNumber)}
            required
            />
            <label htmlFor="emotionTwo">What is another major feeling you are experiencing today?</label>
            <input 
            type="text"
            id="emotionTwo"
            value={emotionTwo}
            onChange={(e) => setEmotionTwo(e.target.value)}
            required
            />
            <label htmlFor="magnitudeTwo">On a scale from 1-10, how strongly are you feeling this way?</label>
            <input 
            type="range"
            id="magnitudeTwo"
            min = {1}
            max = {10}
            value={magnitudeTwo}
            onChange={(e) => setMagnitudeTwo(e.target.valueAsNumber)}
            required
            />
            <label htmlFor="emotionThree">What is a third major feeling you are experiencing today?</label>
            <input 
            type="text"
            id="emotionThree"
            value={emotionThree}
            onChange={(e) => setEmotionThree(e.target.value)}
            required
            />
            <label htmlFor="magnitudeThree">On a scale from 1-10, how strongly are you feeling this way?</label>
            <input 
            type="range"
            id="magnitudeThree"
            min = {1}
            max = {10}
            value={magnitudeThree}
            onChange={(e) => setMagnitudeThree(e.target.valueAsNumber)}
            required
            />
            <label htmlFor="reason">Why do you think you are feeling this way?</label>
            <textarea 
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required>  
            </textarea>
            <button type="submit">Submit</button>
        </form>
)

}

export default EditFeeling;