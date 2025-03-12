import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
export default function AssignmentControlButtons({ assignmentId, deleteAssignment, editAssignment }: {
    assignmentId: string; deleteAssignment: (moduleId: string) => void;
  editAssignment: (moduleId: string) => void }) {
  return (
    <div className="float-end">
      <FaPencil onClick={() => editAssignment(assignmentId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>
    </div>
);}