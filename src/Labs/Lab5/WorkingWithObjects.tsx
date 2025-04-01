import { useState } from "react";
import { FormControl, Button, Form } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS",
    course: "CS999",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      {/* Modifying Assignment Properties */}
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <hr />

      <h4>Update Score</h4>
      <Form.Group>
        <Form.Label>Score:</Form.Label>
        <FormControl
          type="number"
          className="w-50"
          value={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}
        />
        <Button
          id="wd-update-score"
          className="btn btn-success mt-2"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </Button>
      </Form.Group>
      <hr />

      <h4>Mark as Completed</h4>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="Completed"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <Button
          id="wd-update-completed"
          className="btn btn-warning mt-2"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed Status
        </Button>
      </Form.Group>
      <hr />


      <h4>Retrieving Modules</h4>
      <a id="wd-retrieve-modules" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Name
      </a>
      <hr />
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end"
        href={`${MODULE_API_URL}/name/${module.name}`}
      >
        Update Name
      </a>
      <FormControl
        className="w-75"
        id="wd-module-name"
        defaultValue={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <hr />

    </div>
  );
}
