import { FaBan, FaCircle } from "react-icons/fa";
export default function GraySlashCircle() {
  return (
    <span className="me-1 position-relative">
      <FaBan style={{ top: "5px"}} className="position-absolute fs-5 me-1"/>
      <FaCircle className="text-light me-1 fs-6" />
    </span>);}