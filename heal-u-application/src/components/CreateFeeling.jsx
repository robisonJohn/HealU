import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function CreateFeeling(props) {
    const [emotion, setEmotion] = useState("");
    const [magnitude, setMagnitude] = useState(0);
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
                setEmotion(feelingToEdit.fields.emotion);
                setMagnitude(feelingToEdit.fields.magnitude);
                setReason(feelingToEdit.fields.reason);
            }
        }
    }, [params.id, props.feelings])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // collect all stateful information in a new feelings object
        const newFeeling = {
            emotion, 
            magnitude,
            reason,
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
            <label htmlFor="emotion">How are you feeling?</label>
            <input 
            type="text"
            id="emotion"
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            required
            />
            <label htmlFor="magnitude">On a scale from 1-10, how strongly are you feeling this way?</label>
            <input 
            type="range"
            id="magnitude"
            min = {1}
            max = {10}
            value={magnitude}
            onChange={(e) => setMagnitude(e.target.valueAsNumber)}
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

export default CreateFeeling;