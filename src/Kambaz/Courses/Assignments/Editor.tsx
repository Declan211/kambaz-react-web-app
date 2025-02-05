import { Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <p>Assignment Name</p>
        <Form.Control id="wd-name" type="text" defaultValue="A1" />
  <br />
  <Form.Control
  as="textarea"
  defaultValue="The assignment is available online 

  Submit a link to the landing page of your Web application running on Netlify. 
  
  The landing page should include the following:

    - Your full name and section
    - Links to each of the lab assignments
    - Link to the Kanbas application
    - Links to all relevant source code repositories
    - The Kanbas application should include a link to navigate back to the landing page."
  style={{
    height: "300px",
    borderRadius: "0",
  }}
/>

        <br /><br />
  
        <div className="container">
      <Row className="mb-3">
        <Col md={3} className="text-end">
          <Form.Label htmlFor="wd-points">Points</Form.Label>
        </Col>
        <Col>
          <Form.Control id="wd-name" type="text" defaultValue="100" />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-group">Assignment Group</label>
        </Col>
        <Col>
        <Form.Group className="position-relative">
  <Form.Control as="select" id="wd-group" className="ps-3 pe-5">
    <option>ASSIGNMENTS</option>
    <option>QUIZZES</option>
    <option>PROJECTS</option>
  </Form.Control>
  <IoIosArrowDown
    className="position-absolute top-50 end-0 translate-middle-y me-2"
    style={{ fontSize: '1.2em'}}
  />
</Form.Group>

        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={3} className="text-end">
          <label htmlFor="wd-display-grade-as">Display Grade as</label>
        </Col>
        <Col>
        <Form.Group className="position-relative">
  <Form.Control as="select" id="wd-group" className="ps-3 pe-5">
    <option>Percentage</option>
    <option>Points</option>
    <option>Complete/Incomplete</option>
  </Form.Control>
  <IoIosArrowDown
    className="position-absolute top-50 end-0 translate-middle-y me-2"
    style={{ fontSize: '1.2em'}}
  />
</Form.Group>  
        </Col>
      </Row>
      <Row className="mb-3">
  <Col md={3} className="text-end">
    <label htmlFor="wd-submission-type">Submission Type</label>
  </Col>
  <Col>
    <Card className="p-3">
      <Form.Group className="position-relative mb-3">
        <Form.Control as="select" id="wd-group" className="ps-3 pe-5">
          <option>Online</option>
          <option>On Paper</option>
          <option>No Submission</option>
        </Form.Control>
        <IoIosArrowDown
          className="position-absolute top-50 end-0 translate-middle-y me-2"
          style={{ fontSize: '1.2em' }}
        />
      </Form.Group>

      <div>
        <h6 className="fw-bold">Online Entry Options</h6>
        <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" inline  /><br /><br />
        <Form.Check type="checkbox" id="wd-text-entry" label="Website URL" inline defaultChecked/><br /><br />
        <Form.Check type="checkbox" id="wd-text-entry" label="Media Recordings" inline /><br /><br />
        <Form.Check type="checkbox" id="wd-text-entry" label="Student Annotations" inline /><br /><br />
        <Form.Check type="checkbox" id="wd-text-entry" label="File Uploads" inline /><br /><br />
      </div>
    </Card>
  </Col>
</Row>

<Row className="mb-3">
  <Col md={3} className="text-end">
    <label htmlFor="wd-submission-type">Assign</label>
  </Col>
  <Col>
    <Card className="p-3">
    <h6 className="fw-bold">Assign to</h6>
    <Form.Group controlId="wd-assign-to" className="mb-3">
      <div className="border p-2 d-flex align-items-center" style={{ borderRadius: "0px" }}>
        <Badge bg="light" text="dark" className="me-2" style={{ borderRadius: "0px", padding: "5px 10px", fontSize: "16px", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px" }}>
          Everyone 
          <ImCross style={{ fontSize: "11px" }} />
        </Badge>
      </div>
    </Form.Group>
    <br />
    <h6 className="fw-bold">Due</h6>
    <Form.Control
  type="datetime-local"
  id="wd-due-date"
  defaultValue="2024-05-13T23:59"
/>
<br />
<Row>
      <Col md={6}>
        <Form.Group controlId="wd-available-from">
          <Form.Label><strong>Available from</strong></Form.Label>
          <Form.Control type="datetime-local" defaultValue="2024-05-06T12:00" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="wd-available-until">
          <Form.Label><strong>Until</strong></Form.Label>
          <Form.Control type="datetime-local" />
        </Form.Group>
      </Col>
    </Row>

    </Card>
  </Col>
</Row>
    </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '3px', marginTop: '15px' }}>
        <Button variant="light" size="lg" className="me-1">
      Cancel
        </Button>
        <Button variant="danger" size="lg" className="me-1">
      Save
        </Button>
  </div>
      </div>
    );
  }