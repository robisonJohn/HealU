import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Card, Button, Col, Row, Container } from 'react-bootstrap';


function CreateFeeling(props) {
    const [emotion, setEmotion] = useState(0);
    const [magnitude, setMagnitude] = useState(0);
    const [comfort, setComfort] = useState(0);
    const [safety, setSafety] = useState(0);
    const [relationships, setRelationships] = useState(0);
    const [confidence, setConfidence] = useState(0);
    const [actualization, setActualization] = useState(0);
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
                setComfort(feelingToEdit.fields.comfort);
                setSafety(feelingToEdit.fields.safety);
                setRelationships(feelingToEdit.fields.relationships);
                setConfidence(feelingToEdit.fields.confidence);
                setActualization(feelingToEdit.fields.actualization);
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
            comfort,
            safety,
            relationships,
            confidence,
            actualization,
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

    // the return statement will be the following questions

    return (
        <Container id="form-container">
            <Form onSubmit={handleSubmit} id="form">
                <Col>
                <Card className="form-card">
                    <Form.Group controlId="emotion" id="emotion">
                            <Row className="row">
                                <Form.Label className="label">How are you feeling?</Form.Label>
                            </Row>
                            <Row className="row">
                                <Form.Control type="range" value={emotion} min={1} max={10}
                            onChange={(e) => setEmotion(e.target.valueAsNumber)} className="range"/>
                            </Row>
                            
                    </Form.Group>
                </Card>

                <Card className="form-card">
                    <Form.Group controlId="magnitude">
                        <Row className="row">
                            <Form.Label className="label">How strongly are you experiencing this emotion?</Form.Label>
                        </Row>
                        <Row className="row">
                            <Form.Control type="range" value={magnitude} min={1} max={10}
                                onChange={(e) => setMagnitude(e.target.valueAsNumber)} className="range"/>
                        </Row>
                    </Form.Group>
                </Card>
                    
                    
                    <Card className="form-card">
                        <Card.Body>On a scale from 1-10, please answer the following questions to the best of your ability</Card.Body>
                    </Card>

                    <Card className="form-card">
                        <Form.Group controlId="comfort">
                            <Row className="row">
                                <Form.Label className="label">To what degree do you feel comfortable and well-nourished?</Form.Label>
                            </Row>
                            <Row className="row">
                                <Form.Control type="range" value={comfort} min={1} max={10}
                                    onChange={(e) => setComfort(e.target.valueAsNumber)} className="range"/>
                            </Row>
                        </Form.Group>
                    </Card>

                    
                    <Card className="form-card">
                        <Form.Group controlId="safety">
                            <Row className="row">
                                <Form.Label className="label">To what degree do you feel safe in your pesonal and professional environments?</Form.Label>
                            </Row>
                            <Row className="row">
                                <Form.Control type="range" value={safety} min={1} max={10}
                                    onChange={(e) => setSafety(e.target.valueAsNumber)} className="range"/>
                            </Row>
                        </Form.Group>
                    </Card>

                    <Card className="form-card">
                        <Form.Group controlId="relationships">
                            <Row className="row">
                                <Form.Label className="label">To what degree do you feel valued, respected and fulfilled in your relationships?</Form.Label>
                            </Row>
                            <Row className="row">
                                <Form.Control type="range" value={relationships} min={1} max={10}
                                    onChange={(e) => setRelationships(e.target.valueAsNumber)} className="range"/>
                            </Row>
                        </Form.Group>
                    </Card>

                    <Card className="form-card">
                        <Form.Group controlId="confidence">
                            <Row className="row">
                                <Form.Label className="label">To what degree do you feel confident and self-assured?</Form.Label>
                            </Row>
                            <Row className="row">
                                <Form.Control type="range" value={confidence} min={1} max={10}
                                    onChange={(e) => setConfidence(e.target.valueAsNumber)} className="range"/>
                            </Row>
                        </Form.Group>
                    </Card>

                    <Card className="form-card">
                        <Form.Group controlId="actualization">
                            <Row className="row">
                                <Form.Label className="label">To what degree are you the best possible present version of yourself?</Form.Label>
                            </Row>
                            <Row className="row">
                                <Form.Control type="range" value={actualization} min={1} max={10}
                                    onChange={(e) => setActualization(e.target.valueAsNumber)} className="range"/>
                            </Row>
                        </Form.Group>
                    </Card>

                    <Card className="form-card">
                        <Form.Group controlId="reason">
                            <Row className="row">
                                <Form.Label className="label">Why do you think you feel this way?</Form.Label>
                            </Row>
                            <Row className="row">
                                <Form.Control type="textarea" rows={3} value={reason} 
                                    onChange={(e) => setReason(e.target.value)} className="reason"/>
                            </Row>
                        </Form.Group>
                    </Card>
                    <Button type="submit" id="submit">Submit</Button>
                </Col>
                
            </Form>
        </Container>
        
    )

}

export default CreateFeeling;