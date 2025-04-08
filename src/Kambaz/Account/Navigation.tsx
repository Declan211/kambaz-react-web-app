import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CourseNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const [selectedLink, setSelectedLink] = useState("Signin");

  const selectedClasses = "text-black active";
  const unselectedClasses = "text-danger";

  const linkPaths: { [key: string]: string } = {
    Signin: "/Kambaz/Account/Signin",
    Signup: "/Kambaz/Account/Signup",
    Profile: "/Kambaz/Account/Profile",
  };

  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={linkPaths[link]}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item text-danger border border-0 ${
            selectedLink === link ? selectedClasses : unselectedClasses
          }`}
          onClick={() => setSelectedLink(link)}
        >
          {link}
        </Link>
      ))}
          {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
  );
}
