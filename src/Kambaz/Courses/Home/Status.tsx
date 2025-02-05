import { Button } from "react-bootstrap";  
import WhiteCheckmark from "../Modules/WhiteCheckmark";
import GraySlashCircle from "../Modules/GraySlashCircle";
import { LuImport } from "react-icons/lu";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { FaBell, FaChartSimple } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";

export default function CourseStatus() {     
  return (       
    <div id="wd-course-status">         
      <h2>Course Status</h2>         
      <div className="d-flex gap-2">
        <Button variant="success" size="lg" className="w-50 d-flex align-items-center justify-content-start">
          <WhiteCheckmark  /> Publish
        </Button>
     
        <Button variant="light" size="lg" className="w-50 d-flex align-items-center justify-content-start">
          <GraySlashCircle /> Unpublish
        </Button> 
      </div> 
      <br />
      <Button variant="light" size="lg" id="course-settings-btn" className="w-100 d-flex align-items-center justify-content-start">
        <LuImport className="me-2 text-dark" /> Import Existing Content
      </Button>

      <Button variant="light" size="lg" id="course-settings-btn" className="w-100 d-flex align-items-center justify-content-start">
        <LiaFileImportSolid className="me-2 text-dark"/> Import from Commons
      </Button>

      <Button variant="light" size="lg" id="course-settings-btn" className="w-100 d-flex align-items-center justify-content-start">
        <IoMdHome className="me-2" /> Choose Home Page
      </Button>

      <Button variant="light" size="lg" id="course-settings-btn" className="w-100 d-flex align-items-center justify-content-start">
        <FaChartSimple className="me-2" /> View Course Stream
      </Button>

      <Button variant="light" size="lg" id="course-settings-btn" className="w-100 d-flex align-items-center justify-content-start">
        <TfiAnnouncement className="me-2" /> New Announcement
      </Button>

      <Button variant="light" size="lg" id="course-settings-btn" className="w-100 d-flex align-items-center justify-content-start">
        <FaChartSimple className="me-2" /> New Analytics
      </Button>

      <Button variant="light" size="lg" id="course-settings-btn" className="w-100 d-flex align-items-center justify-content-start">
        <FaBell className="me-2" /> View Course Notifications
      </Button>
      
    </div> 
  );
}
