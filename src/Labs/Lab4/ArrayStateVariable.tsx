import { useState } from "react";
import { Button } from "react-bootstrap";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <Button variant="success" onClick={addElement}>Add Element</Button>
      <ul className="d-flex flex-column gap-2 list-unstyled">
  {array.map((item, index) => (
    <li key={index} className="card p-2 d-flex flex-row align-items-center gap-2 shadow-sm w-100">
      <span>{item}</span>
      <Button
        variant="danger"
        onClick={() => deleteElement(index)}
        id="wd-delete-element-click"
        className="btn btn-sm btn-danger"
      >
        Delete
      </Button>
    </li>
  ))}
</ul>

      <hr/>
    </div>
  );
}
