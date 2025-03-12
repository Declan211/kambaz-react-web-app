import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./index.css"
import "./styles.css"
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";


export default function Kambaz() {
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const { courses } = useSelector((state:any) => state.coursesReducer)
  const dispatch = useDispatch();
  const [courseName, setCourseName] = useState("New Course");
  const [description, setDescription] = useState("New Course Description")
  const addNewCourse = () => {
    {dispatch(addCourse({ name: courseName, description: description }))};
  };
  const deleteCourseAction = (courseId: any) => {
    {dispatch(deleteCourse(courseId))}
  };;
  const updateCourseAction = () => {
    dispatch(updateCourse({...course, name: courseName, description: description}))
  };

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={           <ProtectedRoute> <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              courseName={courseName}
              setCourseName={setCourseName}
              description={description}
              setDescription={setDescription}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourseAction}
              updateCourse={updateCourseAction}/> </ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/> </ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
);}


  