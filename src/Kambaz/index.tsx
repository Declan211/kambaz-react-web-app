import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./index.css"
import "./styles.css"
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import * as userClient from "./Account/client";
import * as client from "./Courses/client";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const fetchCourses = async () => {
    try {
      let courses = [];
      if (!showAllCourses) {
        courses = await userClient.findMyCourses()
      } else {
        courses = await client.fetchAllCourses();
      }
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser, showAllCourses]);

  const [courseName, setCourseName] = useState("New Course");
  const [description, setDescription] = useState("New Course Description")
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse({...course, name: courseName, description: description});
    setCourses([ ...courses, newCourse ]);
  };

  const deleteCourseAction = async (courseId: any) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };;
  const updateCourseAction = async () => {
    await courseClient.updateCourse({course});
    setCourses(courses.map((c) => {
        if (c._id === course._id) { return course}
        else { return c; }
    })
  );};


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
              updateCourse={updateCourseAction}
              showAllCourses={showAllCourses}
              setShowAllCourses={setShowAllCourses}/> </ProtectedRoute>} />
          <Route path="/Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses}/> </ProtectedRoute>} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
        </Routes>
      </div>
    </div>
);}


  