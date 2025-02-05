import { useState } from "react";
import { Link } from "react-router-dom";
export default function CourseNavigation() {
  const [selectedLink, setSelectedLink] = useState("Signin");
  const selectedClasses = "text-black active"
  const unselectedClasses = "text-danger"
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Account/Signin" id="wd-course-home-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Signin" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Signin")}> Signin </Link>
      <Link to="/Kambaz/Account/Signup" id="wd-course-modules-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Signup" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Signup")}> Signup </Link>
      <Link to="/Kambaz/Account/Profile" id="wd-course-piazza-link"
        className={`list-group-item text-danger border border-0 ${
          selectedLink === "Profile" ? selectedClasses : unselectedClasses
        }`}
        onClick={() => setSelectedLink("Profile")}> Profile </Link>
    </div>
);}