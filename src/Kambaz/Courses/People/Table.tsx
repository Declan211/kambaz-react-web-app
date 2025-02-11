import { useParams } from "react-router-dom";
import users from "../../Database/users.json";
import enrollments from "../../Database/enrollments.json";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
export default function PeopleTable() {
  const { cid } = useParams();
  
  return (
    <div id="wd-people-table">
        <Table striped>
      <tbody>
  {users
    .filter((usr: any) =>
      enrollments.some((enrollment: any) => enrollment.user === usr._id && enrollment.course === cid)
    )
    .map((user: any) => (
      <tr key={user._id}>
        <td className="wd-full-name text-nowrap">
          <FaUserCircle className="me-2 fs-1 text-secondary" />
          <span className="wd-first-name">{user.firstName} </span>
          <span className="wd-last-name">{user.lastName}</span>
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