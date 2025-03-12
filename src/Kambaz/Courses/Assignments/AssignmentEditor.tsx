import { Modal, FormControl, Button, Row, Col, Card, Form } from "react-bootstrap";
export default function AssignmentEditor({ show, handleClose, dialogTitle, assignmentName, setAssignmentName, 
    assignmentDescription, setAssignmentDescription, assignmentPoints, setAssignmentPoints, dueDate, setDueDate, availFromDate, 
    setAvailFromDate, availUntilDate, setAvailUntilDate, addAssignment,}: {
 show: boolean; handleClose: () => void; dialogTitle: string; assignmentName: string; setAssignmentName: (name: string) => void;
 assignmentDescription: string, setAssignmentDescription: (assignment: string) => void, 
 assignmentPoints: number, setAssignmentPoints: (points: number) => void, dueDate: string, setDueDate: (dueDate: string) => void, 
 availFromDate: string, setAvailFromDate: (availFromDate: string) => void, availUntilDate: string, 
 setAvailUntilDate: (availUntilDate: string) => void, addAssignment: () => void; }) {
 return (
  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
    <Modal.Title>{dialogTitle}</Modal.Title>
   </Modal.Header>
   <Modal.Body>
   <Form.Label><strong>Assignment Name</strong></Form.Label>
    <FormControl value={assignmentName}
     onChange={(e) => { setAssignmentName(e.target.value); }} />
     <br />
     <FormControl value={assignmentDescription}
     onChange={(e) => { setAssignmentDescription(e.target.value); }} />
     <br />
      <Row className="mb-3">
        <Col md={3} className="text-end">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
        </Col>
        <Col>
          <Form.Control id="wd-name" type="text" defaultValue={ assignmentPoints} 
          onChange={(e) => { setAssignmentPoints(Number(e.target.value)); }}/>
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
  value={dueDate}
  onChange={(e) => { setDueDate(e.target.value); }}
/>
<br />
<Row>
      <Col md={6}>
        <Form.Group controlId="wd-available-from">
          <Form.Label><strong>Available from</strong></Form.Label>
          <Form.Control type="datetime-local" defaultValue={availFromDate}
          onChange={(e) => { setAvailFromDate(e.target.value); }}/>
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="wd-available-until">
          <Form.Label><strong>Until</strong></Form.Label>
          <Form.Control type="datetime-local" defaultValue={availUntilDate}
          onChange={(e) => { setAvailUntilDate(e.target.value); }}/>
        </Form.Group>
      </Col>
    </Row>
    </Card>
  </Col>
</Row>
   </Modal.Body>
   <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}> Cancel </Button>
    <Button variant="primary"
     onClick={() => {
      addAssignment();
      handleClose();
     }} > Add Assignment </Button>
   </Modal.Footer>
  </Modal>
);}