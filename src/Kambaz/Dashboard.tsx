import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
  <div id="wd-dashboard-courses">
    <Row xs={1} md={5} className="g-4">
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/2222/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/CSS-Logo.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CS2222 CSS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">CSS Fundamentals</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>  
      <Card>
          <Link to="/Kambaz/Courses/9999/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/cake.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">CAKE9999</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">How to make cake</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> 
        </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
      <Card>
          <Link to="/Kambaz/Courses/101/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/sigma.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">SIG101</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">How to be a sigma</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> 
        </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>       
        <Card>
          <Link to="/Kambaz/Courses/505/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/science.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">SC505</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Science</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card>  
        </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
          <Link to="/Kambaz/Courses/666/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/khan.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">HIST666</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">History of Mongolia</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> 
         </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
        <Card>
          <Link to="/Kambaz/Courses/111/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img variant="top" src="/images/recess.jpg" width="100%" height={160}/>
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title">REC111</Card.Title>
              <Card.Text  className="wd-dashboard-course-description">Recess</Card.Text>
              <Button variant="primary">Go</Button>
            </Card.Body>
          </Link>
        </Card> 
      </Col>
    </Row>
</div></div>
);}
