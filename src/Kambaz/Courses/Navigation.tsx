import { useState } from "react";
import { Link } from "react-router-dom";
export default function CourseNavigation() {
  const [selectedLink, setSelectedLink] = useState("Home");
  const selectedClasses = "text-black active"
  const unselectedClasses = "text-danger"
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Home" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Home")}> Home </Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Modules" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Modules")}> Modules </Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Piazza" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Piazza")}> Piazza </Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Zoom" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Zoom")}> Zoom </Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Assignments" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Assignments")}> Assignments </Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Quizzes" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Quizzes")}> Quizzes </Link>
      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "People" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("People")}> People </Link>
    </div>
);}
