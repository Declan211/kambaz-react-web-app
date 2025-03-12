import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button } from "react-bootstrap";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
              <input
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
      <Button className="me-2 ms-4" variant="success" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
      <Button variant="warning" onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
    </li>
);}

  