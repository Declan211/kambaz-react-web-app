import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import AssignmentEditor from "./AssignmentEditor";

export default function AssignmentsControls({ assignmentName, setAssignmentName, 
    assignmentDescription, setAssignmentDescription, assignmentPoints, setAssignmentPoints, dueDate, setDueDate, availFromDate, 
    setAvailFromDate, availUntilDate, setAvailUntilDate, addAssignment }:
    { assignmentName: string; setAssignmentName: (name: string) => void;
        assignmentDescription: string, setAssignmentDescription: (assignment: string) => void, 
        assignmentPoints: number, setAssignmentPoints: (points: number) => void, dueDate: string, setDueDate: (dueDate: string) => void, 
        availFromDate: string, setAvailFromDate: (availFromDate: string) => void, availUntilDate: string, 
        setAvailUntilDate: (availUntilDate: string) => void, addAssignment: () => void; }) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
            <div>
                <Button variant="light" size="lg" className="me-1">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
                </Button>
                <Button variant="danger" onClick={handleShow} size="lg" className="me-1">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
                </Button>
                <AssignmentEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
                assignmentName={assignmentName} setAssignmentName={setAssignmentName} assignmentDescription={assignmentDescription} 
                setAssignmentDescription={setAssignmentDescription} assignmentPoints={assignmentPoints} setAssignmentPoints={setAssignmentPoints}
                 dueDate={dueDate} setDueDate={setDueDate} availFromDate={availFromDate} setAvailFromDate={setAvailFromDate}
                 availUntilDate={availUntilDate} setAvailUntilDate={setAvailUntilDate} addAssignment={addAssignment}/>
            </div>
        )
    }