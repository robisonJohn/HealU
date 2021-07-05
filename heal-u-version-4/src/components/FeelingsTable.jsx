import Feeling from "./Feelings.jsx";
import { Table } from "react-bootstrap";

function FeelingsTable() {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Love</th>
                <th>Peace</th>
                <th>Pride</th>
                <th>Joy</th>
                <th>Intrigue</th>
                <th>Trust</th>
                <th>Comfort</th>
                <th>Safety</th>
                <th>Relationships</th>
                <th>Confidence</th>
                <th>Actualization</th>
                <th>Reason</th>
                </tr>
            </thead>
            
            <Feeling />
        </Table>
    )
}
export default FeelingsTable;