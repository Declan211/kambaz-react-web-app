import { FaBan, FaCircle } from "react-icons/fa";
export default function SlashCircle() {
  return (
    <span className="me-1 position-relative">
      <FaBan style={{ top: "2px"}} className="position-absolute fs-5 me-1"/>
      <FaCircle className="text-white me-1 fs-6" />
    </span>);}