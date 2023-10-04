import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  handleComplete,
} from "../app/features/todo/todoSlice";
import AddTodo from "./AddTodo";
import { AiOutlineDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import "./Todos.css";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const todo = todos.map((todo) => {
    return todo.text ? (
      <div key={todo.id} className={`todo ${todo.completed ? "complete" : ""}`}>
        <span className="todo__text">{todo.text}</span>
        <div className="icons">
          <AiOutlineDelete
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="delete__btn"
          />
          <MdDone
            onClick={() => dispatch(handleComplete(todo.id))}
            className={`done__btn ${todo.completed ? "done" : ""}`}
          />
        </div>
      </div>
    ) : (
      ""
    );
  });
  return (
    <>
      <AddTodo />
      {todo}
    </>
  );
}

export default Todos;
