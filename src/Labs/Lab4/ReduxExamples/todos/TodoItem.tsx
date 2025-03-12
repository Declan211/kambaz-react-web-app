import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { Button } from "react-bootstrap";
export default function TodoItem({ todo } :
    {todo: { id: string; title: string };}
) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
        {todo.title}
      <Button className="ms-4 me-2" variant="danger" onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </Button>
      <Button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </Button>
    </li>
);}

