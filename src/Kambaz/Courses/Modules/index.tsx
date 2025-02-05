import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import GreenCheckmark from "./GreenCheckmark";
import { FaPlus } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <>
      <div>
        <ModulesControls />
        <br />
        <br />
        <br />
        <br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center justify-content-start">
              <BsGripVertical className="me-2 fs-3" />
              Week 1
              <div className="ms-auto d-flex gap-2">
                <GreenCheckmark />
                <FaPlus />
                <HiDotsVertical />
              </div>
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                Introduction to the course
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                Learn what is Web Development
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-light d-flex align-items-center justify-content-start">
              <BsGripVertical className="me-2 fs-3" />
              Week 2
              <div className="ms-auto d-flex gap-2">
                <GreenCheckmark />
                <FaPlus />
                <HiDotsVertical />
              </div>
            </div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                LEARNING OBJECTIVES
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 1
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="wd-lesson p-3 ps-2 d-flex align-items-center justify-content-start">
                <BsGripVertical className="me-2 fs-3" />
                LESSON 2
                <div className="ms-auto d-flex gap-2">
                  <GreenCheckmark />
                  <HiDotsVertical />
                </div>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}
