import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { PiNotePencil } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
import assignments from "./assignments.json"

export default function Assignments() {
  const { cid } = useParams();
    return (
      <div id="wd-assignments">
  <div className="d-flex align-items-center mb-3">
  <InputGroup className="me-auto" style={{ width: "250px" }}>
  <InputGroup.Text className="bg-white border-end-0">
    <FaSearch className="text-muted" />
  </InputGroup.Text>
  <Form.Control
    type="text"
    placeholder="Search..."
    className="border-start-0"
    style={{
      height: "50px",
      borderRadius: "0",
    }}
  />
</InputGroup>

    <Button variant="light" size="lg" className="me-1">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Group
    </Button>
    <Button variant="danger" size="lg" className="me-1">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Assignment
    </Button>
  </div>
      <br />
    <ListGroup className="rounded-0" id="wd-modules">
      <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center justify-content-start">
  <BsGripVertical className="me-2 fs-3" />
  <h4 className="mb-0 d-flex align-items-center">
    <IoMdArrowDropdown className="me-1" />
    Assignments
  </h4>
  <div className="ms-auto d-flex align-items-center gap-2">
  <span className="px-3 py-1 rounded-pill bg-light border border-secondary text-dark fs-6">
      40% of total
    </span>
    <FaPlus />
    <HiDotsVertical />
  </div>
  
</div>
<div className="wd-lessons rounded-0">
      {assignments
      .filter((assignment: any) => assignment.course === cid)
      .map(({ _id, title, availableStart, dueDate, points, course }) => (
        <div key={_id} className="wd-lesson p-3 ps-1">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <BsGripVertical className="me-2 fs-3" />
              <PiNotePencil size={32} className="text-success fs-5" />
              <div>
                <h4 className="mb-1">
                  <a href={`#/Kambaz/Courses/${course}/Assignments/${_id}`} className="wd-assignment-link">
                    {title}
                  </a>
                </h4>
                <p className="text-danger mb-1 small d-inline">Multiple Modules</p>
                <p className="text-muted small mb-1 d-inline"> |
                  <strong> Not available until </strong> {new Date(availableStart).toLocaleDateString(undefined, { month: "long", day: "numeric" })} at 12:00am |
                </p>
                <p className="text-dark small mb-0">
                  <strong>Due</strong> {new Date(dueDate).toLocaleDateString(undefined, { month: "long", day: "numeric" })} at 11:59pm | {points} pts
                </p>
              </div>
            </div>
            <div className="ms-auto d-flex gap-2">
              <GreenCheckmark />
              <HiDotsVertical />
            </div>
          </div>
        </div>
      ))}
    </div>
          </ListGroup.Item>
        </ListGroup>
      </div>
  );}
  