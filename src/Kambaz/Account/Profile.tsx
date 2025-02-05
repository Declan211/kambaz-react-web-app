import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <Form.Control id="wd-username"
             defaultValue="alice"
             className="mb-2"/>
      <Form.Control id="wd-password"
             defaultValue="123"
             className="mb-2"/>
      <Form.Control id="wd-username"
        defaultValue="Alice"
        className="mb-2"/>
      <Form.Control id="wd-username"
        defaultValue="Wonderland"
        className="mb-2"/>
      <Form.Control id="wd-username"
        className="mb-2" type="date"/>
      <Form.Control id="wd-username"
          defaultValue="alice@wonderland.com"
          className="mb-2"/>
      <Form.Control id="wd-username"
             defaultValue="User"
             className="mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-danger w-100 mb-2">
            Signout </Link>
    </div> );}
