import { Button, Card, Col, Form, FormControl, InputGroup, ListGroup, Modal, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { PiNotePencil } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addAssignment, deleteAssignment, editAssignment, updateAssignment } from "./reducer";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";

export default function Assignments() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === 'FACULTY'
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [assignmentName, setAssignmentName] = useState("New Assignment");
  const [assignmentDescription, setAssignmentDescription] = useState("New Assignment Description");
  const [assignmentPoints, setAssignmentPoints] = useState(100);
  const [dueDate, setDueDate] = useState("");
  const [availFromDate, setAvailFromDate] = useState("");
  const [availToDate, setAvailToDate] = useState("");
  const handleResetStates = () => {
    setAssignmentName("New Assignment");
    setAssignmentDescription("New Assignment Description");
    setAssignmentPoints(100);
    setDueDate("");
    setAvailFromDate("");
    setAvailToDate("");
  }

    return (
      <div id="wd-assignments">
  <div className="d-flex align-items-center mb-3">
  <InputGroup className="me-auto" style={{ width: "250px" }}>
  <InputGroup.Text className="bg-white border-end-0">
    <FaSearch className="text-muted" />
  </InputGroup.Text>
  <Form.Control
    type="text"
    placeholder="Search..."
    className="border-start-0"
    style={{
      height: "50px",
      borderRadius: "0",
    }}
  />
</InputGroup>

    {isFaculty && (<AssignmentsControls assignmentName={assignmentName} setAssignmentName={setAssignmentName} assignmentDescription={assignmentDescription} 
                setAssignmentDescription={setAssignmentDescription} assignmentPoints={assignmentPoints} setAssignmentPoints={setAssignmentPoints}
                 dueDate={dueDate} setDueDate={setDueDate} availFromDate={availFromDate} setAvailFromDate={setAvailFromDate}
                 availUntilDate={availToDate} setAvailUntilDate={setAvailToDate}
        addAssignment={() => {
          dispatch(addAssignment({ title: assignmentName, course: cid, availableStart: availFromDate, availableUntil: availToDate, dueDate: dueDate, 
            points: assignmentPoints, description: assignmentDescription
          }));
          setAssignmentName("New Assignment");
        }} />)}
  </div>
      <br />
    <ListGroup className="rounded-0" id="wd-modules">
      <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center justify-content-start">
  <BsGripVertical className="me-2 fs-3" />
  <h4 className="mb-0 d-flex align-items-center">
    <IoMdArrowDropdown className="me-1" />
    Assignments
  </h4>
  <div className="ms-auto d-flex align-items-center gap-2">
  <span className="px-3 py-1 rounded-pill bg-light border border-secondary text-dark fs-6">
      40% of total
    </span>
    <FaPlus />
    <HiDotsVertical />
  </div>
  
</div>
<div className="wd-lessons rounded-0">
      {assignments
      .filter((assignment: any) => assignment.course === cid)
      .map((assignment: any) => (
        <div key={assignment._id} className="wd-lesson p-3 ps-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencil size={32} className="text-success fs-5" />
              <div>
                <h4 className="mb-1">
                <a
                    href={isFaculty ? `#/Kambaz/Courses/${assignment.course}/Assignments/${assignment._id}` : "#"}
                    className="wd-assignment-link"
                    onClick={(e) => {
                      if (!isFaculty) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {assignment.title}
                    {assignment.editing && ( 



                    <Modal show={assignment.editing} onEnter={() => {
                      setAssignmentName(assignment.title);
                      setAssignmentDescription(assignment.description);
                      setAssignmentPoints(assignment.points);
                      setDueDate(assignment.dueDate);
                      setAvailFromDate(assignment.availableStart);
                      setAvailToDate(assignment.availableUntil)
                    }}>
   <Modal.Header closeButton>
    <Modal.Title>{"Edit Assignment"}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
   <Form.Label><strong>Assignment Name</strong></Form.Label>
    <FormControl value={assignment.title}
     onChange={(e) => dispatch(
      updateAssignment({ ...assignment, title: e.target.value })
    )} />
     <br />
     <FormControl value={assignment.description}
     onChange={(e) => dispatch(
      updateAssignment({ ...assignment, description: e.target.value })
    )} />
     <br />
      <Row className="mb-3">
        <Col md={3} className="text-end">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
        </Col>
        <Col>
          <Form.Control id="wd-name" type="text" defaultValue={ assignment.points} 
          onChange={(e) => {
            dispatch(updateAssignment({ ...assignment, points: Number(e.target.value) }));
          }}/>
        </Col>
      </Row>
<Row className="mb-3">
  <Col md={3} className="text-end">
    <label htmlFor="wd-submission-type">Assign</label>
  </Col>
  <Col>
    <Card className="p-3">
    <h6 className="fw-bold">Due</h6>
    <Form.Control
  type="datetime-local"
  id="wd-due-date"
  defaultValue={assignment.dueDate}
  onChange={(e) => dispatch(
    updateAssignment({ ...assignment, dueDate: e.target.value })
  )}
/>
<br />
<Row>
      <Col md={6}>
        <Form.Group controlId="wd-available-from">
          <Form.Label><strong>Available from</strong></Form.Label>
          <Form.Control type="datetime-local" defaultValue={assignment.availableStart}
          onChange={(e) => dispatch(
            updateAssignment({ ...assignment, availableStart: e.target.value })
          )}/>
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="wd-available-until">
          <Form.Label><strong>Until</strong></Form.Label>
          <Form.Control type="datetime-local" defaultValue={assignment.availableUntil}
          onChange={(e) => dispatch(
            updateAssignment({ ...assignment, availableUntil: e.target.value })
          )}/>
        </Form.Group>
      </Col>
    </Row>
    </Card>
  </Col>
</Row>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary"onClick={() => {
      dispatch(updateAssignment({ ...assignment, title: assignmentName, description: assignmentDescription, points: assignmentPoints, 
        availableStart: availFromDate, availableUntil: availToDate, dueDate: dueDate, editing: false }));
     }}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      dispatch(updateAssignment({ ...assignment, editing: false }))
      handleResetStates();
     }} > Update Assignment </Button>
   </Modal.Footer>
  </Modal>
   )}
                  </a>
                </h4>
                <p className="text-danger mb-1 small d-inline">Multiple Modules</p>
                <p className="text-muted small mb-1 d-inline"> |
                  <strong> Not available until </strong> {new Date(assignment.availableStart).toLocaleDateString(undefined, { month: "long", day: "numeric" })} at 12:00am |
                </p>
                <p className="text-dark small mb-0">
                  <strong>Due</strong> {new Date(assignment.dueDate).toLocaleDateString(undefined, { month: "long", day: "numeric" })} at 11:59pm | {assignment.points} pts
                </p>
              </div>
            </div>
            <div className="ms-auto d-flex gap-2">
            {isFaculty && (<div><AssignmentControlButtons assignmentId={assignment._id}
                  deleteAssignment={(assignmentId) => {
                    dispatch(deleteAssignment(assignmentId));
                  }}
                  editAssignment={(assignmentId) => dispatch(editAssignment(assignmentId))} />
            </div>)}
              <GreenCheckmark />
              <HiDotsVertical />
            </div>
          </div>
        </div>
      ))}
    </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  