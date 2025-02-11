import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { courses } from "../Database";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { HiOutlineBars4 } from "react-icons/hi2";
import PeopleTable from "./People/Table";
export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
    return (
      <div id="wd-courses">
        <h2 className="d-flex align-items-center text-danger">
          <HiOutlineBars4 className="me-2" />
          {course && course.name} &gt; {pathname.split("/")[4]}
        </h2>
        <hr />
        <div className="d-flex">
    <div className="d-none d-md-block">
            <CourseNavigation />
            </div>
    <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
            </div></div>
      </div>
  );}
  