import { Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { HiOutlineBars4 } from "react-icons/hi2";
import PeopleTable from "./People/Table";
export default function Courses() {
    return (
      <div id="wd-courses">
        <h2 className="d-flex align-items-center">
          <HiOutlineBars4 className="me-2" />
            Course 1234
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
  