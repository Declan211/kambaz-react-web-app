import { FaCheckCircle, FaCircle } from "react-icons/fa";
export default function WhiteCheckmark() {
  return (
    <span className="me-1 position-relative">
      <FaCheckCircle style={{ top: "5px" }} className="text-light me-1 position-absolute fs-5" />
      <FaCircle className="text-success me-1 fs-6" />
    </span>);}