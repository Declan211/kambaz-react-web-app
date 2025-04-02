import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  editCourse } from "./Courses/reducer";
import { enrollInCourse, unenrollFromCourse } from "./Courses/enrollmentsReducer";
import * as enrollmentsClient from "./Courses/Enrollments/client"

export default function Dashboard(
  {  courses, setCourse, courseName, setCourseName, description, setDescription, addNewCourse,
    deleteCourse, updateCourse, showAllCourses, setShowAllCourses }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    courseName: string, setCourseName: (name: string) => void;
    description: string, setDescription: (description: string) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; showAllCourses: boolean, setShowAllCourses: (value: boolean) => void;}) {
      const { currentUser } = useSelector((state: any) => state.accountReducer);
      const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
      const isFaculty = currentUser.role === 'FACULTY';
      const isStudent = currentUser.role === 'STUDENT';
      const dispatch = useDispatch();
      const navigate = useNavigate();
    

      const isEnrolled = (courseId: string) => {
        return enrollments.some(
          (enrollment: { user: string; course: string }) =>
            enrollment.user === currentUser._id && enrollment.course === courseId
        );
      };

      const handleEnroll = (courseId: string) => {
        enrollmentsClient.enrollUserInCourse(currentUser._id, courseId)
        dispatch(enrollInCourse({
          user: currentUser._id,
          course: courseId
        }));
      };

      const handleUnenroll = (courseId: string) => {
        enrollmentsClient.unenrollUserFromCourse(currentUser._id, courseId)
        dispatch(unenrollFromCourse({
          user: currentUser._id,
          course: courseId
        }));
      };

      const navigateToCourse = (courseId: string, event: React.MouseEvent) => {
        if (isStudent) {
          if (!isEnrolled(courseId)) {
            event.preventDefault();
            return;
          }
        }
        navigate(`/Kambaz/Courses/${courseId}/Home`);
      };

      return (
        <div id="wd-dashboard">
          <h1 id="wd-dashboard-title">Dashboard</h1>
          <div className="d-flex justify-content-end">
            {isStudent && (
              <Button 
                variant="primary" 
                onClick={() => setShowAllCourses(!showAllCourses)}
              >
                Enrollments
              </Button>
            )}
          </div>
          <br />
          {isFaculty && (
            <div>
              <h5>
                New Course
                <button 
                  className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse}
                >
                  Add
                </button>
              </h5>
              <hr />
              <button 
                className="btn btn-warning float-end me-2"
                onClick={updateCourse} 
                id="wd-update-course-click"
              >
                Update
              </button>
              <br />
              <input    
                value={courseName} 
                className="form-control mb-2" 
                onChange={(e) => setCourseName(e.target.value)}
              />
              <textarea 
                value={description} 
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
              <hr />
            </div>
          )}
          <h2 id="wd-dashboard-published">
            Published Courses ({courses.length})
          </h2>
          <hr />
          <div id="wd-dashboard-courses">
            <Row xs={1} md={5} className="g-4">
              {courses
                  .map((course: any) => (
                  <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                    <Card>
                      <Card.Img src="/images/reactjs.jpg" width="100%" height={160} />
                      <Card.Body>
                        <Card.Title className="wd-dashboard-course-title">
                          {course.name}
                        </Card.Title>
                        <Card.Text className="wd-dashboard-course-description" style={{ maxHeight: 100, overflowY: "hidden" }}>
                          {course.description}
                        </Card.Text>
                        <Link
                          to={`/Kambaz/Courses/${course._id}/Home`}
                          className="btn btn-primary"
                          onClick={(e) => navigateToCourse(course._id, e)}
                        >
                          Go
                        </Link>

                        {isStudent && (
                          isEnrolled(course._id) ? (
                            <Button 
                              variant="danger" 
                              className="float-end"
                              onClick={() => handleUnenroll(course._id)}
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button 
                              variant="success" 
                              className="float-end"
                              onClick={() => handleEnroll(course._id)}
                            >
                              Enroll
                            </Button>
                          )
                        )}
                        
                        {isFaculty && (
                          <>
                            <button 
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }} 
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button 
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(editCourse(course._id));
                                setCourse(course);
                                setCourseName(course.name);
                                setDescription(course.description);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </div>
        </div>
      );
}