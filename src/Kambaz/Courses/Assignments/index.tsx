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
import { useEffect, useState } from "react";
import { setAssignments, addAssignment, deleteAssignment, updateAssignment as updateAssignmentAction } from "./reducer";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === 'FACULTY';
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
  const [showEditModal, setShowEditModal] = useState(false);
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
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const createAsssignmentForCourse = async () => {
    if (!cid) return;
    const newAssignment = { 
      title: assignmentName, 
      course: cid, 
      availableStart: availFromDate, 
      dueDate: dueDate,
      points: assignmentPoints, 
      description: assignmentDescription 
    };
    const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
    dispatch(addAssignment(assignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignmentAction(assignment));
  };

  const saveEditedAssignment = async () => {
    const updatedAssignment = {
      ...selectedAssignment,
      title: assignmentName,
      course: cid,
      description: assignmentDescription,
      points: assignmentPoints,
      availableStart: availFromDate,
      dueDate: dueDate,
    };
    await saveAssignment(updatedAssignment);
  };


  const openEditModal = (assignment: any) => {
    setSelectedAssignment(assignment);
    setAssignmentName(assignment.title);
    setAssignmentDescription(assignment.description);
    setAssignmentPoints(assignment.points);
    setDueDate(assignment.dueDate);
    setAvailFromDate(assignment.availableStart);
    setAvailToDate(assignment.availableUntil);
    setShowEditModal(true);
  };

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

        {isFaculty && (
          <AssignmentsControls 
            assignmentName={assignmentName} 
            setAssignmentName={setAssignmentName} 
            assignmentDescription={assignmentDescription} 
            setAssignmentDescription={setAssignmentDescription} 
            assignmentPoints={assignmentPoints} 
            setAssignmentPoints={setAssignmentPoints}
            dueDate={dueDate} 
            setDueDate={setDueDate} 
            availFromDate={availFromDate} 
            setAvailFromDate={setAvailFromDate}
            availUntilDate={availToDate} 
            setAvailUntilDate={setAvailToDate}
            addAssignment={createAsssignmentForCourse} 
          />
        )}
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
            {assignments.map((assignment: any) => (
              <div key={assignment._id} className="wd-lesson p-3 ps-1">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencil 
                      size={32} 
                      className="text-success fs-5" 
                      onClick={(e) => {
                        e.preventDefault();
                        openEditModal(assignment);
                      }}
                    />
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
                        </a>
                      </h4>
                      <p className="text-danger mb-1 small d-inline">Multiple Modules</p>
                      <p className="text-muted small mb-1 d-inline">
                        | <strong>Not available until</strong> {new Date(assignment.availableStart).toLocaleDateString(undefined, { month: "long", day: "numeric" })} at 12:00am |
                      </p>
                      <p className="text-dark small mb-0">
                        <strong>Due</strong> {new Date(assignment.dueDate).toLocaleDateString(undefined, { month: "long", day: "numeric" })} at 11:59pm | {assignment.points} pts
                      </p>
                    </div>
                  </div>
                  <div className="ms-auto d-flex gap-2">
                    {isFaculty && (
                      <div>
                        <AssignmentControlButtons 
                          assignmentId={assignment._id}
                          deleteAssignment={(assignmentId) => removeAssignment(assignmentId)}
                          editAssignment={(assignmentId) => {
                            const assgn = assignments.find((a: any) => a._id === assignmentId);
                            if (assgn) {
                              openEditModal(assgn);
                            }
                          }}
                        />
                      </div>
                    )}
                    <GreenCheckmark />
                    <HiDotsVertical />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ListGroup.Item>
      </ListGroup>

      <Modal show={showEditModal} onHide={() => { setShowEditModal(false); handleResetStates(); }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Assignment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label><strong>Assignment Name</strong></Form.Label>
          <FormControl 
            value={assignmentName}
            onChange={(e) => setAssignmentName(e.target.value)}
          />
          <br />
          <FormControl 
            value={assignmentDescription}
            onChange={(e) => setAssignmentDescription(e.target.value)}
          />
          <br />
          <Row className="mb-3">
            <Col md={3} className="text-end">
              <Form.Label>Points</Form.Label>
            </Col>
            <Col>
              <Form.Control 
                type="text" 
                value={assignmentPoints} 
                onChange={(e) => setAssignmentPoints(Number(e.target.value))}
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={3} className="text-end">
              <Form.Label>Due</Form.Label>
            </Col>
            <Col>
              <Card className="p-3">
                <h6 className="fw-bold">Due</h6>
                <Form.Control
                  type="datetime-local"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <br />
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="wd-available-from">
                      <Form.Label><strong>Available from</strong></Form.Label>
                      <Form.Control 
                        type="datetime-local" 
                        value={availFromDate}
                        onChange={(e) => setAvailFromDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="wd-available-until">
                      <Form.Label><strong>Until</strong></Form.Label>
                      <Form.Control 
                        type="datetime-local" 
                        value={availToDate}
                        onChange={(e) => setAvailToDate(e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShowEditModal(false); handleResetStates(); }}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {
            saveEditedAssignment();
            setShowEditModal(false);
            handleResetStates();
          }}>
            Update Assignment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
