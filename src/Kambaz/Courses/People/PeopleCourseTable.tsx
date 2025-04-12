import { FaUserCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import PeopleDetails from "./Details";
import * as coursesClient from "../../Courses/client"
import { useEffect, useState } from "react";

export default function PeopleTable() {
  const { cid } = useParams();
  const [users, setUsers] = useState([]);
 const fetchUsers = async () => {
    const users = await coursesClient.findUsersForCourse(cid);
    setUsers(users);
 }
 useEffect(() => {
    fetchUsers()
  }, []);
  return (
    <div id="wd-people-table">
      <PeopleDetails />
        <Table striped>
      <tbody>
  {users
    .map((user: any) => (
      <tr key={user._id}>
        <td className="wd-full-name text-nowrap">
        <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </Link>
        </td>
        <td className="wd-login-id">{user.loginId}</td>
        <td className="wd-section">{user.section}</td>
        <td className="wd-role">{user.role}</td>
        <td className="wd-last-activity">{user.lastActivity}</td>
        <td className="wd-total-activity">{user.totalActivity}</td>
      </tr>
    ))}
</tbody>
</Table>

    </div> );}